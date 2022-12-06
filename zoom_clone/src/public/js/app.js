//io() : 자동으로 back-end socket.io와 연결해 주는 fn
const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");
const room = document.querySelector("#room");

room.hidden = true;

let roomName;

function printRoomUserCount(countRoomUsers) {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room: ${roomName} (${countRoomUsers})`;
}

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  const value = input.value;
  socket.emit("send_message", value, roomName, () =>
    addMessage(`You: ${value}`)
  );
  input.value = "";
}

function showRoom(countRoomUsers) {
  welcome.hidden = true;
  room.hidden = false;
  printRoomUserCount(countRoomUsers);
  const msgForm = room.querySelector("#msg");
  msgForm.addEventListener("submit", handleMessageSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const roomInput = document.querySelector("#roomname");
  const nickName = document.querySelector("#nick");
  socket.emit("enter_room", roomInput.value, nickName.value, showRoom);
  /*
  emit의 input argument 설명
  첫변수(event명): enter_room은 내가 정하는 것
  중간변수: string 뿐 아니라 object도 전송가능
  마지막변수: 콜백함수(must last argument, front-end에서 실행됨), back-end에서 보낸 argument를 받을 수 있음
  
  input argument 개수
  socket.emit("event_name", 1, 2, true, false) // 이처럼 여러 인자를 back-end로 보낼 수도 있음

  front와 back의 연결
  front의 emit 이벤트명과 back의 on의 이벤트명에 같은 이름을 사용해야 함
  */
  roomName = roomInput.value;
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (nickname, countRoomUsers) => {
  printRoomUserCount(countRoomUsers);
  addMessage(`${nickname} joined!`);
});

socket.on("bye", (nickname, countRoomUsers) => {
  printRoomUserCount(countRoomUsers);
  addMessage(`${nickname} disconnected`);
});

//socket.on("show_message", (message) => addMessage(message)); //아래와 같다
socket.on("show_message", addMessage);

socket.on("room_change", (rooms) => {
  const roomList = welcome.querySelector("ul");
  roomList.innerHTML = "";
  if (rooms.length === 0) {
    return;
  }
  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
