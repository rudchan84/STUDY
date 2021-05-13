//toggleBtn이라는 변수에 document html 노드 중에 Class가 navbar_toggleBtn인 것을 할당
//예전에는 querySelector 같은 API들이 많이 없었기 때문에 jquery를 이용해서 선택할 수 있게 도와주는 라이브러리를 썼는데
//요즘에는 기본적인 API들이 잘 되어 있기 때문에 더이상 jquery를 사용하지 않아도 됨
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const SNS = document.querySelector('.navbar_sns'); /* D가 대문자로 되어 있었더니 기능동작안함 */

// addEventListener API를 이용해서 toggleBtn이 클릭될 때마다 이벤트를 처리
// click이 될 때마다 우리가 지정하는 이 함수를 호출해줘
toggleBtn.addEventListener('click', () => {
    //클릭 될 때마다 classList중 active class를 토글링 함
    //클릭 했을 때 메뉴와 SNS의 클래스가 active가 없다면 active를 추가해주고 있다면 다시 빼 줌
    menu.classList.toggle('active');
    SNS.classList.toggle('active');
});
