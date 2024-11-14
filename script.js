// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear the input field
    }
}

// Function to remove a task from the list
function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
