//▼express를 import하고 express application을 구성
import http from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import express from "express";
//import WebSocket from "ws";

const app = express();
//▲

//pug 설정
app.set("view engine", "pug"); //view engine을 pug로 설정
app.set("views", __dirname + "/views"); //views 디렉토리 설정

//localhost:3000/public/js/app.js 로 가게 되면 'cannot GET /public/js/app.js' 에러가 나고 있으므로
//user가 /public으로 가게 되면 __dirname+"/public" 폴더를 보여주게 하기 (user가 public 폴더의 파일을 볼 수 있도록 설정)
//public 파일들은 FrontEnd에서 구동되는 코드
app.use("/public", express.static(__dirname + "/public"));

//사용할 유일한 route
app.get("/", (req, res) => res.render("home")); //나의 홈페이지로 이동 시 사용될 템플릿을 렌더

//localhost:3000/어떤URL 을 써도 localhost:3000/ 으로 보내기
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const httpServer = http.createServer(app);
//const wss = new WebSocket.Server({ server });
const io = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

instrument(io, {
  auth: false,
});

// ▼ vanilla JS 의 형식
//function handleConnection(socket) {
//  console.log(socket); //서버에 console.log, socket 변수는 연결된 사람의 정보를 제공한다
//}

////Javascript의 document.addeventlistener 같은 것
////wss.on(이벤트, 호출할 함수) 이벤트는 몇가지 없다
////wss : webSocket secure, https 와 비슷한 맥락
//wss.on("connection", handleConnection);
// ▲

/* const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "anonymous"; //socket에 nickname 넣기
  console.log('Connected to Browser ✅');
  socket.on("close", () => console.log("Disconnected From Browser ❌"));
  socket.on("message", (msgObj) => {
    const message = JSON.parse(msgObj);
    switch (message.type) {
      case "new_message":
        sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`));
      case "nickname":
        socket["nickname"] = message.payload;
        console.log(socket["nickname"]);
    }
  });
}); */

function getPublicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms }, //adapter 안의 sids, rooms 는 map이라는 자료구조로 get, set 의 함수로 읽고, 넣음
    },
  } = io;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

function countRoomUsers(roomName) {
  return io.sockets.adapter.rooms.get(roomName)?.size; //?는 없는 roomName을 넣었을 경우 서버 crash를 방지
}

io.on("connection", (socket) => {
  socket.onAny((event) => {
    console.log(`>> socket event: ${event}`);
  });
  socket.on("enter_room", (roomName, nickName, done) => {
    console.log(socket.rooms);
    socket.join(roomName);
    console.log(socket.rooms);
    socket["nickname"] = nickName;
    console.log(socket.nickname);
    done(countRoomUsers(roomName));
    socket
      .to(roomName)
      .emit("welcome", socket.nickname, countRoomUsers(roomName)); //방에 메세지 보내기, document 참고
    io.sockets.emit("room_change", getPublicRooms());
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => {
      console.log(`bye: ${room}`);
      socket.to(room).emit("bye", socket.nickname, countRoomUsers(room) - 1); //방을 떠나기 전 나를 뺀 숫자를 전달
    });
  });
  socket.on("disconnect", () => {
    io.sockets.emit("room_change", getPublicRooms());
  });
  socket.on("send_message", (message, roomName, done) => {
    socket.to(roomName).emit("show_message", `${socket.nickname} : ${message}`);
    done();
  });
});

httpServer.listen(3000, handleListen);
//app.listen(3000, handleListen);
