const backgroundImg = ["0.jpg", "1.jpg", "2.jpg"];
const randomBgNum = Math.floor(Math.random() * backgroundImg.length);
const bgImg = document.createElement("img");

bgImg.src = `img/${backgroundImg[randomBgNum]}`;
document.body.appendChild(bgImg);


console.log(bgImg);
