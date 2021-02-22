// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-add");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// functions

function addTodo(e) {
  // Prevents Form from submitting
  e.preventDefault();

  // Stop submitting empty todo
  if (todoInput.value === "") {
    alert("Add some todo activities please :)");
  } else {
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
      
      //Add to localStorage
    //   saveLocalStorage(todoInput.value)

    // Check mark button
    const completeButton = document.createElement("button");
    completeButton.innerText = "Done";
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Append to todo list
    todoList.appendChild(todoDiv);

    // clear todoInput field
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;

  //Delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// Filter todo
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

// Save to local storage

// function saveLocalStorage(todo) {
    
//   //check for todo in local storage
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify("todos"));
// }
