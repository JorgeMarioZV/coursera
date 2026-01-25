// Simple To-Do List Application

// Defining Variables to accesss HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
// const addTaskButton = document.getElementById("addTaskBtn"); // Not necessary if using onclick in HTML as I did
// const clearCompletedButton = document.getElementById("clearCompletedBtn"); // Not necessary if using onclick in HTML as I did

let tasks = [];

// addTaskButton.addEventListener("click", addTask); // Not necessary if using onclick in HTML as I did
// clearCompletedButton.addEventListener("click", clearCompletedTasks); // Not necessary if using onclick in HTML as I did

function addTask(params) {
    const taskText = taskInput.value.trim(); // Remove whitespace - Clean data
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = ""; // Clear input field
        displayTasks();
    }
}


function displayTasks() {
    taskList.innerHTML = ""; // Clear existing tasks
    tasks.forEach((task, index) => {
        const li = document.createElement("li"); // Create a new list item (An alternative is using innerHTML)
        li.innerHTML = 
            `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label id="task-text-${index}" class="${task.completed ? "strikethrough" : ""}" for="task-${index}">${task.text}</label>`; // Modified by me to improve code
                // <label id="task-text-${index}" for="task-${index}">${task.text}</label>`;
                // <label for="task-${index}">${task.text}</label>`; // I improved this code by just toggling the class instead of re-rendering the whole list
                // li.textContent = task.text; // Alternative using textContent
                // li.style.textDecoration = task.completed ? "line-through" : "none"; // Visual indication of completion (Added by me). // I improved this code by just toggling the class instead of re-rendering the whole list
            li.querySelector("input").addEventListener("change", () => toggleTask(index)); // Since it depends on index, I can't use onclick in HTML directly or above at the beginning of the code
                // li.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})"/> ${task.text}`;
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    const textTask = document.getElementById(`task-text-${index}`);
    textTask.classList.toggle("strikethrough"); // Class tooggled-class is added
    // displayTasks(); // I imporved this code by just toggling the class instead of re-rendering the whole list
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks(); 
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}