const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  //아래 2가지 같은 기능을 하지만 parentElement 가 코드를 슥 봤을 때 이해하기 쉬움!
  event.target.parentElement.remove();
  //event.path[1].remove();
}

function paintToDo(newToDo) {
  const newToDoLi = document.createElement("li");
  const newToDoLiSpan = document.createElement("span");
  newToDoLiSpan.innerText = newToDo;
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click",deleteToDo)
  newToDoLi.appendChild(newToDoLiSpan);
  newToDoLi.appendChild(delBtn);  

  //Li 에 추가
  toDoList.appendChild(newToDoLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoFormInput.value;
  toDoFormInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

