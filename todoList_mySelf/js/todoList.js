const todoFormHTML = document.querySelector("#todo-form");
const todoInputHTML = document.querySelector("#todo-form input");
const todoListHTML = document.querySelector("#todoList");

function delTodo(event) {
  const delLiHTML = event.target.parentElement;

  delLiHTML.remove();

//  console.log(event);
}

function onSubmitTodo(event) {
  event.preventDefault();
  inputedTodo = todoInputHTML.value;
  todoInputHTML.value = "";

  //li tag create
  const todoLiHTML = document.createElement("li");
  todoLiHTML.innerText = inputedTodo;
  todoListHTML.appendChild(todoLiHTML);

  //del button create
  const delBtnHTML = document.createElement("button");
  delBtnHTML.innerText = "✂"
  todoLiHTML.appendChild(delBtnHTML);

  delBtnHTML.addEventListener("click",delTodo);
}

todoFormHTML.addEventListener("submit",onSubmitTodo);


