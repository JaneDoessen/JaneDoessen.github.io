//Task 1
const person = {
    name: "Peter",
    age:35,
}
console.log(person);
console.log("Name", person.name);
console.log("Age", person.age);

//Task 2
function createObject(object){
    object.name={};
    object.name.firstName="Peter";
    object.name.lastName="Pan";
    return console.log(object);
}
createObject(person);

//Task 3
const personFemale = {
    name: {
        firstName: "Jane",
        lastName: "Doessen",
    },
    age: 12,
    bio: function(){
        return console.log(
            "Name - ", 
            this.name.firstName, 
            this.name.lastName,
            ";",
            "Age - ",
            this.age);
    }
}
personFemale.bio();

//Task 4
const personMale = {
    name: {
        firstName: "John",
    },
    introduceSelf: function(){
        return console.log(
            "Hi! I'm", this.name.firstName);
    }
}
personMale.introduceSelf();

//Task 5
function createPerson (name){
    return {
        name: name,
        introduceSelf: function () {
            return console.log("Hi, I'm", this.name);
        }, 
    };
}

let personOne = createPerson("Julian");
let personTwo = createPerson("Julia");

personOne.introduceSelf();
personTwo.introduceSelf();

//Task 6
function Person (name){
    this.name = name;
    this.introduceSelf = function() {
        console.log ("Hi, I'm", this.name);
    };
}
let mary = new Person("Mary");
let tom = new Person ("Tom");

mary.introduceSelf();
tom.introduceSelf();

// визначити, чи містить об'єкт mary властивість під назвою prop.
let prop = 'prop' in mary;
console.log(prop);

//Task 7
const DryMartini = {
    gin: 6,
    vermouth: 1,
    brine_from_olive:1,
    olives: 4,
    avoirdupois: 28.4131,
    english_please() {
        return `ingredients:
        ${this.gin} fluid ounces gin
        ${this.vermouth} dash dry vermouth (0.0351951ml)
        ${this.brine_from_olive} fluid ounce brine from olive jar
        ${this.olives} stuffed green olives`;
        },
    excuse_my_french() {
        return `ingrédients:
        ${this.gin*this.avoirdupois} ml de gin
        ${this.vermouth} trait de vermouth sec (0.0351951ml)
        ${this.brine_from_olive*this.avoirdupois} ml de maumure du pot d'olive
        ${this.olives} olives vertes farcies`;
    },
};

console.log(DryMartini.english_please());
console.log(DryMartini.excuse_my_french());