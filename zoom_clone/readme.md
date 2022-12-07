# Noom (zoom clone coding)

Zoom Clone using NodeJS, WebRTC and Websockets

#### 2022.09.22

##### Server Setup

`mkdir zoom_clone` 폴더 생성
`npm init -y` 실행
자동으로 package.json 파일이 생성

> npm

npm 이 무엇인가? > node.js 를 설치하면 사용할 수 있는 기능
npm (노드 패키지 매니저/Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다
https://ko.wikipedia.org/wiki/Npm_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)

---

package.json 파일 수정

```
{
  "name": "zoom_clone",
  "version": "1.0.0",
  "description": "Zoom Clone using NodeJS, WebRTC and Websockets",
  "license": "JKC",
}
```

---

nodemon 설치
(우리의 프로젝트에 변경사항이 생긴 경우 서버를 재시작 해주는 프로그램)
(nodemon.json 파일에 적어 놓았듯이 서버를 재시작 하는 대신 babel-node를 실행
nodemon.json 파일에 적어 놓았듯이 이 작업을 src/server.js 파일에 해줌)
`npm i nodemon -D`

---

파일 생성
babel.config.json
nodemon.json
src/server.js : BackEnd에서 구동되는 파일

폴더생성
src

---

babel 설치
(우리가 작성한 코드를 일반 NodeJS 코드로 컴파일 해줌)
`npm i @babel/core @babel/cli @babel/node -D`
`npm i @babel/preset-env -D`

---

nodemon.json 파일 수정
nodemon은 "exec" 명령어를 이용해서 아래 하나만 실행하도록
src/server.js 에 대해 babel-node 명령문을 실행시키는 것

```
{
  "exec": "babel-node src/server.js"
}
```

---

babel.config.json 파일 수정
사용할 유일한 preset

```
{
  "presets": ["@babel/preset-env"]
}
```

---

package.json 에 추가
nodemon 이 호출되면 nodemon이 nodemon.json을 살펴보고 있는 코드를 실행

```
"scripts": {
  "dev": "nodemon"
},
```

---

express 설치

`npm i express`

pug 설치

`npm i pug`

---

server.js 수정

```
import express from "express";

const app = express();

console.log('hello');

app.listen(3000);
```

---

실행

`npm run dev`

---

#### Frontend Setup

app.js 생성 : FrontEnd에서 구동되는 파일
home.pug 생성

```
src/public/js/app.js
src/views/home.pug
```

---

Express로 할 일은 views를 설정, render 만 하고
나머지는 websocket에서 실시간으로

---

#### 2022.10.04

##### WS Install

> WS 란?

a Node.js WebSocket library

`npm i ws`

http 서버와 ws 서버가 같은 port를 사용하도록 같이 만들어 두었다.

#### 2022.11.10

##### SOCKET.IO Framework

> SOCKET.IO

Front-end 와 Back-end 간 실시간 통신을 가능하게 해주는 Framework
실시간 기능을 더 쉽게 만드는 편리한 코드를 제공한다
websocket을 사용하기도 하고, websocket에 지원 안되는 곳에서는 다른 방식으로 통신을 한다
websocket의 부가 기능이 아니다

##### SOCKET.IO Install

npm i socket.io

#### 2022.12.07

##### SOCKET.IO admin npm

socket.io에서 지원하는 admin UI 페이지

> 설치

`npm i "@socket.io/admin-ui"`

> 진입

https://admin.socket.io/ 으로 접속하여
*Server URL : http://localhost:3000
Advanced options 에서
*Admin namespace : /admin
*Path : 공백
Connect !