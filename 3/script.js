const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task function
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    // Create element
    const li = document.createElement("li");
    
    // Create text span for easier editing
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);

    // Edit functionality (Click on text to edit)
    span.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent bubbling
        const newText = prompt("Edit your task:", span.innerText);
        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText.trim();
        }
    });

    // Delete functionality
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove(); // Use remove() method
    });

    li.appendChild(deleteBtn);
    
    // Use appendChild() to add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Event Listeners
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});