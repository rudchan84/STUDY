//▼express를 import하고 express application을 구성
import express from "express";

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
app.listen(3000, handleListen);