// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to Add Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task item
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="up-btn">⬆️</button>
        <button class="down-btn">⬇️</button>
        <button class="delete-btn">❌</button>
    `;

    // Add event listeners
    li.addEventListener("click", markCompletedTask);
    li.querySelector(".delete-btn").addEventListener("click", deleteTask);
    li.querySelector(".up-btn").addEventListener("click", moveTaskUp);
    li.querySelector(".down-btn").addEventListener("click", moveTaskDown);

    // Append to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Function to Mark Task as Completed
function markCompletedTask() {
    this.classList.toggle("completed");
}

// Function to Delete Task
function deleteTask(event) {
    event.stopPropagation();
    this.parentElement.remove();
}

// Function to Move Task Up
function moveTaskUp(event) {
    event.stopPropagation();
    const taskItem = this.parentElement;
    const previousTask = taskItem.previousElementSibling;
    if (previousTask) {
        taskList.insertBefore(taskItem, previousTask);
    }
}

// Function to Move Task Down
function moveTaskDown(event) {
    event.stopPropagation();
    const taskItem = this.parentElement;
    const nextTask = taskItem.nextElementSibling;
    if (nextTask) {
        taskList.insertBefore(nextTask, taskItem);
    }
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
