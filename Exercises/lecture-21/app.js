//Task 1
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(',');

//Task 2
for (let i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}

//Task 3
let h=0;
while (h<fruits.length){
    console.log(fruits[h]);
    h++;
}

//Task 4
let e = 0;
do {
    console.log(fruits[e]);
    e++;
} while (e < fruits.length);

//Task 5
for (const fruit of fruits){
    console.log(fruit);
}

//Task 6
const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let j=2; j<Numbs.length; j++) {
    if (Numbs[j] % 2 === 0) {
    console.log(Numbs[j]);
    }
}

//Task 7
const names = ['Batman'];
names.push('Joker');
console.log(names);

//Task 8
const namesOne = ['Batman'];
namesOne.unshift('Joker');
console.log(namesOne);

//Task 9
const namesTwo = ['Batman', 'Joker', 'Bane'];
namesTwo.unshift('Catwoman');
console.log(namesTwo);

//Task 10
let namesThree = ['Batman', 'Joker', 'Bane'];
namesThree = ['Catwoman', ...namesThree];
console.log(namesThree);

//Task 11
const namesFour = ['Batman', 'Joker', 'Bane'];
namesFour[1] = 'Catwoman';
console.log(namesFour);

//Task 12
const namesFive = ['Batman', 'Catwoman', 'Joker', 'Bane'];
delete namesFive[1];
console.log(namesFive);

//Task 13
const namesSix = ['Batman', 'Catwoman', 'Joker', 'Bane'];
namesSix.splice(1,2);
namesSix[1] = 'Alfred';
console.log(namesSix);

//Task 14
const namesSeven = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!namesSeven.includes('Alfred')) {
    namesSeven.push('Alfred');
}
console.log(namesSeven);

//Task 15
const namesEight = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const alfie = namesEight.indexOf('Alfred');
if (alfie !== -1) {
    namesEight.splice(alfie);
} else{
    console.log("There is no 'Alfred' in it");
    }
console.log(namesEight);
