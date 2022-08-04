const clock = document.querySelector("h2#clock"); //이런 방식도 있다~

function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,"0");
  const minute = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hour}:${minute}:${second}`
  
  //const date = new Date();
  //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getTime(); //시계가 1초 뒤 나오니까 바로 한 번 호출
setInterval(getTime,999);

