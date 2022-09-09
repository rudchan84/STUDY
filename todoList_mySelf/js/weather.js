const API_KEY = "8ade77f456e22903465b05c25e9a6acf";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //const lat = position.coords.;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then((item) => item.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.weather[0].main;
    city.innerText = `${data.main.temp} ${data.name}`;
  })
}

function onGeoErr() {
  alert("I don't know where you are.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);