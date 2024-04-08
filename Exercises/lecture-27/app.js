const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemsArray = JSON.parse(localStorage.getItem('items')) || [];
console.log(itemsArray);

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    const ul = document.querySelector('.to-do-list');
    ul.appendChild(li);
}
addTask('Exercise');

const tasks = ['task 1', 'task2', 'task3'];
tasks.forEach(task => {
    addTask(task);
});

function add() {
    const input = document.querySelector('input[type="text"]');
    const value = input.value.trim();
        if (value !=='') {
            itemsArray.push(value);
            localStorgae.setItem('items'. JSON.stringfy(itemsArray));
            addTask(value);
            input.value = '';
            alert("Task added");
        } 
}

function del() {
    localStorage.removeItem('items');
    itemsArray = [];
    const ul = document.querySelector('.to-do-list');
    ul.innerHTML = '';
}
