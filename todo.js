const addtask = document.querySelector("#text");
const button = document.querySelector("#btna");
const get = document.querySelector("ul");

// Function to render a single task
function renderTask(task) {
    let li = document.createElement("li");
    let create1 = document.createElement("button");

    li.textContent = task; // Set task text
    create1.innerText = "Delete"; // Set button text

    li.appendChild(create1); // Append button inside list item
    get.appendChild(li); // Append list item to the UL

    // Delete only this task
    create1.addEventListener("click", () => {
        let todo = JSON.parse(localStorage.getItem("task")) || [];
        let updatedTodo = todo.filter(t => t !== task); // Remove only this task
        localStorage.setItem("task", JSON.stringify(updatedTodo));
        li.remove(); // Remove the element from the UI
    });
}

// Function to add a task
const adding = () => {
    let key = addtask.value.trim();
    if (key === "") {
        alert("Please enter a task");
        return;
    }

    let todo = JSON.parse(localStorage.getItem("task")) || [];
    todo.push(key);
    localStorage.setItem("task", JSON.stringify(todo));

    renderTask(key); // Call function to display task
    addtask.value = ""; // Clear input field
};

// Function to load tasks from localStorage on page load
const loadTasks = () => {
    let todo = JSON.parse(localStorage.getItem("task")) || [];
    get.innerHTML = ""; // Clear the list before rendering
    todo.forEach(renderTask); // Render each task from storage
};

// Load tasks when page refreshes
window.addEventListener("load", loadTasks);

// Add task when button is clicked
button.addEventListener("click", adding);

