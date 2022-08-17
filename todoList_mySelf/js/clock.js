function getClock() {
const clock = document.querySelector("#clock");
const hours = new Date().getHours().toString().padStart(2,"0");
const minutes = new Date().getMinutes().toString().padStart(2,"0");
const seconds = new Date().getSeconds().toString().padStart(2,"0");

clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock,999)