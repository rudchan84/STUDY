const todoFormHTML = document.querySelector("#todo-form");
const todoInputHTML = document.querySelector("#todo-form input");
const todoListHTML = document.querySelector("#todoList");

const TODO_KEY = "todo";

function paintTodo(todoItem) {
  //li tag create
  const todoLiHTML = document.createElement("li");
  todoLiHTML.innerText = todoItem.todo;
  todoLiHTML.id = todoItem.id;
  todoListHTML.appendChild(todoLiHTML);

  //del button create
  const delBtnHTML = document.createElement("button");
  delBtnHTML.innerText = "✂"
  todoLiHTML.appendChild(delBtnHTML);

  delBtnHTML.addEventListener("click",delTodo);
}

function delTodo(event) {
  const delLiHTML = event.target.parentElement;
  delLiHTML.remove();

  const delId = delLiHTML.id;
  const filteredTodoArray = todoArray.filter(todo => todo.id !== parseInt(delId));
  localStorage.setItem(TODO_KEY,JSON.stringify(filteredTodoArray));
}

function onSubmitTodo(event) {
  event.preventDefault();
  inputedTodo = todoInputHTML.value;
  todoInputHTML.value = "";

  //todoArray save
  const submitTodo = {todo:inputedTodo, id:Date.now()}
  todoArray.push(submitTodo);
  localStorage.setItem(TODO_KEY,JSON.stringify(todoArray));

  paintTodo(submitTodo);
}

todoFormHTML.addEventListener("submit",onSubmitTodo);

let todoArray = [];

//localStorage 에 todo가 있으면
if (localStorage.getItem(TODO_KEY) !== null) {
  todoArray = JSON.parse(localStorage.getItem(TODO_KEY));
  todoArray.forEach(todoItem => paintTodo(todoItem));
}

