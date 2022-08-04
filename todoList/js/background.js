//이미지 파일명 배열
const images = ["0.jpg", "1.jpg", "2.jpg"];

//이미지 파일명 랜덤하게 하나 선택
const selectedImage = images[Math.floor(Math.random() * images.length)];

console.log(selectedImage);

//img HTML Tag 만들기
const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;

console.log(bgImage);

//HTML 에 img Tag 추가하기
//appendChild body에 html 을 추가
document.body.appendChild(bgImage);
