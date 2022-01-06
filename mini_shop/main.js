'use strict';

console.log(`hi`);

//Browser의 API중 하나인 Fetch를 이용(파일의 경로나 URL을 입력)
//Fetch the items from the JSON file (JSON파일에 있는 itesm를 받아옴)
function loadItems() {
	return fetch('data/data.json') //Browser API중 하나인 fetch를 사용 (URL, 파일경로를 통해 data를 load)
	//.then(response1 => console.log(response1)); //fetch는 data를 성공적으로 받아오면 response라는 object를 전해준다 data는 body안에 있다
	// Chrome에서 F12로 Network 탭을 보면 main.js 읽고 data.json 파일을 불러온 걸 볼 수 있다
	.then(response => response.json()) //json API를 이용해서 response body 를 json Object로 변환
	//.then(json6 => console.log(json6)) //json으로 
	.then(json => json.items); //필요한 것은 json Object의 items에 있는 배열만
}

//받아온 items를 html요소로 변환하여 보여주자
function displayItems(items) {
	const container = document.querySelector('.items') //부모 컨테이너 안에 추가해야 되기 때문에 컨테이너 정의
	container.innerHTML = items.map(item0 => createHTMLString(item0)).join('');//받아온 items를 html로 변환하여 li그룹으로 만들어서 컨테이너에 추가 하자, 한가지의 배열을 html로 변환하기는 map을 이용해서, join API로 배열에서 문자열로
	console.log(container);
}

//배열의data를 HTML로 변환하는 함수
function createHTMLString(item1) {
	return `
	<li class="item">
		<img src="${item1.image}" alt="${item1.type}" class="item__thumbnail">
		<span class="item__description">${item1.gender}, ${item1.size}</span>
	</li>
	`;
}

//이벤트를 처리하는 함수는 on+어떤이벤트이름 으로 작명하면 알아보기 쉽다
function onButtonClick(event, items) {
	const dataset = event.target.dataset;
	const key = dataset.key;
	const value = dataset.value;
	console.log(typeof(dataset));
	console.log(key);
	console.log(value);

	//컨테이너에 리스너를 등록했기 때문에 버튼외 공간을 클릭 시 함수종료
	if(key == null || value == null) {
		return;
	}

	displayItems(items.filter(item => item[key] === value))

}

function setEventListeners(items) {
	const logo = document.querySelector('.logo'); //button들의 요소 정의
	const buttons = document.querySelector('.buttons') //Container 자체에 있는 EventListener를 등록 : 이벤트의 위임
	// ↑ 하나하나의 버튼에 이벤트 리스너를 반복 등록하는 것 보다 버튼들이 들어있는 컨테이너에 EventListener를 등록해서 한 곳에서 핸들링(효율적)
	logo.addEventListener('click', () => displayItems(items)) // logo 클릭하면 모두 보이게
	buttons.addEventListener('click', event => onButtonClick(event, items))
}

// main.js 파일을 load하면 loadItems 함수 실행
loadItems() //data.json의 data를 동적으로 읽어와서 시간이 걸리기 때문에 그냥 items를 return하기보다 promise를 return하도록 만들자
.then(items => { //promise가 성공이면 items를 받아와서
	//console.log(items); //받아온 itesm를 출력해서 확인
	displayItems(items); //items를 html에 보여줄 함수, 함수에 items를 전달해 주자
	setEventListeners(items) //받아온 items를 필터링을 하기 위해
})
.catch(console.log)

