// 여기는 frontEnd

// backend와 연결하기 
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");
const nickForm = document.querySelector("#nickname");
const socket = new WebSocket(`ws://${window.location.host}`);

//msg를 obj로 만들어서 string으로 보내보자
function makeMessage(type, payload){
  const msg = {type, payload};
  return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
  console.log('Connected to Server ✅');
});

socket.addEventListener("message", (message) => {
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
});

socket.addEventListener("close", () => {
  console.log('Disconnected From Server');
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(makeMessage("new_message", input.value));
  input.value = "";
}

function handleNickSubmit(event){
  event.preventDefault();
  const input = nickForm.querySelector("#nickname input");
  socket.send(makeMessage("nickname",input.value));
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);
