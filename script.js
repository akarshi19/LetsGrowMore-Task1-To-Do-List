
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value;
  
  if (taskText === " ") {
    alert("Please enter a task.");
    return;
  }
  
  const newTask = document.createElement("li");
  newTask.innerHTML = taskText;
  
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete");

  deleteButton.addEventListener("click", function() {
    newTask.remove();
  });
  
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  
  taskInput.value = "";
}
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
