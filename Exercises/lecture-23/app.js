const alert = document.querySelector('.alert');

// Task 1
const classOne = document.querySelector('.btn-primary');

classOne.onclick = function () {
    alert.classList.add ('alert-primary');
    alert.textContent = 'A simple primary alert-check it out!';
}

//Task 2
const classTwo = document.querySelector('.btn-secondary');

classTwo.addEventListener("click", function() {
    alert.classList.add ('alert-primary');
    alert.textContent = 'A simple secondary alert-check it out!';
});

//Task 3
const classThree = document.querySelector('.btn-success');

classThree.addEventListener("mouseover",function () {
    alert.classList.add ('alert-success');
    alert.textContent = 'A simple success alert-check it out!';
});

classThree.addEventListener("mouseout",function () {
    alert.classList.remove ('alert-success');
    alert.textContent = ' ';
});

//Task 4
const classFour = document.querySelector('.btn-danger');

classFour.addEventListener("focus",function () {
    alert.classList.add ('alert-danger');
    alert.textContent = 'A simple danger alert-check it out';
});

classFour.addEventListener("focusout",function () {
    alert.classList.remove ('alert-danger');
    alert.textContent = ' ';
});

//Task 5
const dark = document.querySelector('.btn-dark');
const light = document.querySelector('.btn-light');
light.style.display = 'none';

function toggleMode (){
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        dark.style.display = 'none';
        light.style.display = 'inline-block';
    } else {
        dark.style.display = 'inline-block';
        light.style.dispay = 'none';
    }
}
dark.addEventListener('click', toggleMode);
light.addEventListener('click', toggleMode);

//Task 6
const classSix = document.querySelector('.btn-info');

classSix.addEventListener ('keypress', function (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

// //Task 7
// const classSeven = document.querySelectorAll('.card');

// for (i=0; i<classSeven.length; i++){
//     const cardTitle = classSeven[i].querySelector ('.card-title');
//     console.log(cardTitle.textContent);
// }

// //Task 8
// for (i=0; i<classSeven.length; i++){
//     const btn = classSeven[i];
//     const btnClass = btn.querySelector ('.add-to-cart');
//     btnClass.addEventListener('click',function(){
//     console.log(btn.querySelector('.card-title').textContent);
//     });
// }


// Завдання 7
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}
// а можна ще таким чином
// const cards = document.querySelectorAll(".card");
// for (const card of cards) {
//   console.log(card.querySelector(".card-title").textContent);
// }
//

// Завдання 8
// Селектори знайшов на рядку 95
for (let i = 0; i < cards.length; i++) {
  const btnAddToCard = cards[i].querySelector(".add-to-cart");
  btnAddToCard.addEventListener("click", function () {
    console.log(cards[i].querySelector(".card-title").textContent);
  });
}