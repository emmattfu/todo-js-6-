// Task model
let tasks = [
    {
        text: 'Learn js',
        id: '1'
    },
    {
        text: 'Learn angular',
        id: '2'
    }
];

// Get element list-group
let ul = document.querySelector('.list-group');

// tasks.forEach(task => {
//     let li = listTemplate(task);
//     // insertAdjacentElement
//     ul.insertAdjacentElement("afterbegin", li);
// });

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    // Create element
    let li = document.createElement('li');
    // Add task text
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created li
    return li;
}

// AddTask
function addTask(text) {
    if (!text) return new Error ('There is no text');
    // Create task object
    const newTask = {text, id: String(tasks.length+1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask));
    return message('Task ' + text + ' added');
}

// Delete task
function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++ ) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1)
        }
    }
    let ul = document.querySelector('ul').children;
    for (let i = 0; i < ul.length; i++ ) {
        if (ul[i].dataset.id === id) {
            ul[i].remove()
        }
    }
    return message('Task ' + 'with id: ' + id + ' deleted');
}

// Alert
function message(text) {
    let alertNode = document.querySelector('.alert');

    if (alertNode !== null) {
        alertNode.remove();
    }

    let div = document.createElement('div'),
        container = document.querySelector('.container');
    div.classList.add('alert', 'alert-info');
    alert(text);
    container.insertBefore(div, container.firstChild);
}

