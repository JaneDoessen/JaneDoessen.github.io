// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];

//Task 1
function iter(item){
    console.log(item);
}
colors.forEach(iter);

//Task 2
function iterateOne(item, index){
    console.log(`${item} has index ${index}`);
}
colors.forEach(iterateOne);

function iterateTwo(item, index, array){
    console.log(item);
    if (index === array.length -1 ){
        console.log('The last iteration!');
    }
}
colors.forEach(iterateTwo);

//Task 3
const letters = ['a', 'b', 'c'];

function iterateThree (letter){
    console.log(this === window);
}
letters.forEach(iterateThree);

//Task 4
const Numbers = [22, 3, 4, 10];

let allEvenFour = true;
Numbers.forEach(function (number){
    if (number % 2 === 1) {
        allEevenFour = false;

    }
});
console.log(allEvenFour);

//Task 5
const numbers = [22, 3, 4, 10];
const allEvenFive = numbers.every(function(number){
    return number % 2 === 0;
});
console.log(allEvenFive);

//Task 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === 'blueberries');
console.log(index);
console.log(fruits[index]);

//Task 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find(element => element>10);
console.log(found);

//Task 8
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2===0;
console.log(array.some(even));

//Task 9
const numbersNew = [1, 30, 4, 21, 100000];
numbersNew.sort(function(a,b){
    return a - b;
});
console.log(numbersNew);