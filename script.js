
//selector for the input section
const inputTask = document.querySelector('.task-input');

//selector for the add Button placed besides input bar
const addButton = document.querySelector('.add-button');

//selector for the todo list ul
const toDoList = document.querySelector('.todo-list');

//selector for the filter option
const filterOption = document.querySelector('.filter');

//selector for the last h3 which shows the count of the tasks
const num = document.querySelector('h3');

//numbers of active task
var tas = 0;

//whether the task is active or not, if its true means its active
var arr = [false];

// for adding id's to each <div> of the task
var tCount = 1;



//add eventListeners

//event listener for add button
addButton.addEventListener('click', addTodo);

//event Listener for ToDoList
toDoList.addEventListener('click', deleteCheck);

//event Listener for Filter Option
filterOption.addEventListener('click', filterTodo);






//functions

//for marking the task as completed or deleting the tasks
function deleteCheck(e){
  const item = e.target;
  
  //if delete button is clicked
  if(item.classList[1] === "fa-trash"){
    const parent = item.parentElement.parentElement;
    parent.remove();

    //for grabbing the id of div of particular task
    let idName = parent.id;

    if(arr[idName]){
      tas--;
      arr[idName] = false;
      taskUpdate();
      

    }
  }

  //if completed button is clicked
  if(item.classList[1] === "fa-check"){
    const parent = item.parentElement.parentElement;

    if(parent.classList[1] !== "completed")
    {
      parent.classList.toggle("completed");
      tas--;

      //for grabbing the id of div of particular task
      let idName = parent.id;
      arr[idName] = false;
      taskUpdate();
    }
  }
}

// for updating the number of tasks
function taskUpdate(){
  num.innerHTML = "Number of Tasks : " + tas;
}


//for adding the task
function addTodo(e) {
    //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //setting unique id to the div of the task
    todoDiv.setAttribute('id',tCount);

    //increamenting the count of the id for the upcoming task
    tCount++;


    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = inputTask.value;
  
    newTodo.classList.add("todo-item");

    

    todoDiv.appendChild(newTodo);
    inputTask.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    toDoList.appendChild(todoDiv);
    tas++;
    arr.push(true);
    taskUpdate();
  }


  function filterTodo(e) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo) {
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
        case "uncomplete":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }


 