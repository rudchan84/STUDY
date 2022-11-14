
//io() : 자동으로 back-end socket.io와 연결해 주는 fn
const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");
const room = document.querySelector("#room");

room.hidden = true;

let roomName;

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room: ${roomName}`;
}

function handleRoomSubmit(event){
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
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
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);