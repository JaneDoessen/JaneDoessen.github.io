
// Task 1
function userInput() {
    setTimeout(function() {
        const firstNameInput = document.querySelector('input[name="firstName"]');
        const lastNameInput = document.querySelector('input[name="lastName"]');
        
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;  
        if (firstName === '' && lastName === '') {
            document.getElementById('waiting').textContent = "I miss you";
        } else {
            document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
        }
    },10000);
}

userInput();

// Task 2

let xhr = new XMLHttpRequest();
xhr.open("Get","https://jsonplaceholder.typicode.com/posts");

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

xhr.onload = function() {
    const response = JSON.parse(xhr.responseText);
    let responseFeed = '';
    response.forEach(post => {
        responseFeed += template(post);
    });
    document.getElementById('demo').innerHTML = responseFeed;
};

xhr.send();
