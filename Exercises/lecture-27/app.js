const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemsArray = JSON.parse(localStorage.getItem("items"))  || [];

function addTask(text) {
    let ulItem = document.createElement('li');
    ulItem.textContent = text;
    ul.appendChild(ulItem);
}

function add() {
    const listItem = input.value;
    itemsArray.push(listItem);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(listItem);
    input.value = '';
}

function del() {
    localStorage.removeItem("items");
    itemsArray = [];
    ul.innerHTML = '';
}
