// 1. APPLICATION STATE
// - Holds the state of the application
// - This is the single source of truth for the application state

const todos = [
  new TodoItem('WMC programmieren', false, 1),
  new TodoItem('CABS lernen', false, 3),
  new TodoItem('NSCS lernen', true, 2),
  new TodoItem('POS/Theorie lernen', false, 2),
  new TodoItem('POS/Java üben', false, 1)
];

const priorityLabels = {
  5: '🔴 Sehr Wichtig',
  4: '🟠 Wichtig',
  3: '🟡 Normal',
  2: '🟢 Niedrig',
  1: '⚪ Sehr Niedrig'
};



// 2. STATE ACCESSORS/MUTATORS FN'S
// - Functions that allow us to get and set the state
// - Here we will create functions to add and remove todos

function addTodoItem(todo) {
    todos.push(todo);
}

function removeTodoItem(todo) {
    const idx = todos.indexOf(todo);
    if (idx !== -1) {
        todos.splice(idx, 1);
    } 
}

function toggleTodoStatus(todo) {
    todo.toggleCompleted();
}

function changePriority(todo, newPriority) {
    todo.priority = newPriority;
}

// 3. DOM Node Refs
// - Static references to DOM nodes needed after the start of the application

const newTodoText = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-add");
const prioritySelect = document.getElementById("priority-select");
const todoList = document.getElementById("todo-list");
const todoListDone = document.getElementById("todo-list-done");

// 4. DOM Node Creation Fn's
// - Dynamic creation of DOM nodes needed upon user interaction
// - Here we will create a function that will create a todo item

function createTodoElement(todo) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.setAttribute('data-priority', todo.priority);
    if (todo.completed) {
        listItem.classList.add("is-complete");
    }

    const cbDone = document.createElement("input");
    cbDone.type = "checkbox";
    cbDone.className = "todo-toggle";
    cbDone.checked = todo.completed;
    cbDone.addEventListener('change', _ => onTodoStatusChanged(todo));

    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.innerText = todo.text;

    const priorityBadge = document.createElement("span");
    priorityBadge.className = "priority-badge";
    priorityBadge.innerText = priorityLabels[todo.priority];

    const priorityDropdown = document.createElement("select");
    priorityDropdown.className = "priority-dropdown";
    Object.keys(priorityLabels).forEach(p => {
        const option = document.createElement("option");
        option.value = p;
        option.innerText = priorityLabels[p];
        if (parseInt(p) === todo.priority) option.selected = true;
        priorityDropdown.appendChild(option);
    });
    priorityDropdown.addEventListener('change', e => onPriorityChanged(todo, parseInt(e.target.value)));

    const deleteBtn = document.createElement("input");
    deleteBtn.className = "todo-delete";
    deleteBtn.value = "Delete";
    deleteBtn.type = "button";
    deleteBtn.addEventListener('click', _ => onDeleteButtonClicked(todo));

    listItem.append(cbDone, todoText, priorityBadge, priorityDropdown, deleteBtn);
    return listItem;
}


// 5. RENDER FN
// - These functions will render the application state to the DOM
// - Here we will use a very naive but simple approach to re-render the list
// - IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re-render of the UI


function render() {
    todoList.innerHTML = "";
    todoListDone.innerHTML = "";

    const pending = todos.filter(t => !t.completed).sort((a, b) => b.priority - a.priority);
    const completed = todos.filter(t => t.completed).sort((a, b) => b.priority - a.priority);

    for (const ti of pending) {
        const todoElement = createTodoElement(ti);
        todoList.append(todoElement);
    }

    for (const ti of completed) {
        const todoElement = createTodoElement(ti);
        todoListDone.append(todoElement);
    }
}


// 6. EVENT HANDLERS
// - These functions handle user interaction e.g. button clicks, key presses etc.
// - These functions will call the state mutators and then call the render function
// - The naming convention for the event handlers is `on<Event>`
// - Here we will create a function that will handle the add button click

function onAddButtonClicked() {
    if (newTodoText.value.trim() !== "") {
        const priority = parseInt(prioritySelect.value) || 3;
        const ti = new TodoItem(newTodoText.value.trim(), false, priority);
        addTodoItem(ti);
        newTodoText.value = "";
        render();
    }
}

function onDeleteButtonClicked(todo) {
    removeTodoItem(todo);
    render();
}

function onTodoStatusChanged(todo) {
    toggleTodoStatus(todo);
    render();
}

function onPriorityChanged(todo, newPriority) {
    changePriority(todo, newPriority);
    render();
}

function onKeyDownEvent(e) {
    if (e.key === "Enter") {
        onAddButtonClicked();
    }
}

// 7. INIT BINDINGS
// - These are the initial bindings of the event handlers

addBtn.addEventListener('click', _ => onAddButtonClicked());
newTodoText.addEventListener('keydown', e => onKeyDownEvent(e));
// 8. INITIAL RENDER
// - Here will call the render function to render the initial state of the application

render();
