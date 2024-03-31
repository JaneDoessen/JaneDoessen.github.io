//Task 1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log("Row Length:",str1.length == str2.length);// недбале порівняння
console.log("Row Length:",str1.length === str2.length);// строге порівняння

//Task 2
let string5 = 'Hello World';
//індекс
console.log(string5[0]);
//метод CharAt
console.log(string5.charAt(0));

//Task 3
let str3 = "Hello Javascript";
//індекс
console.log(str3[6]);
//метод CharAt
console.log(str3.charAt(6));

//Task 4
console.log(str3[str3.length-1]);
console.log(str3.at(-1));
console.log(str3.slice(-1));

//Task 5
function lastCharOne(str) {
    return str.charAt (str.length -1);
}
function lastCharTwo(str) {
    return str.slice(-1);
}
function lastCharThree(str) {
    return str[str.length -1];
}
console.log(lastCharOne(str3));
console.log(lastCharTwo(str3));
console.log(lastCharThree(str3));


//Task 6
let a = 'When candles are out,';
let b = ' all cats are grey.';
let result=a.concat(b);
console.log(result);

//Task 7
let fact = "Fifteen is the same as ";
let a1 = 5;
let b1 = 10;
let c = a1 +b1;
fact += + c; 
console.log(fact); 

//Task 8
let firstName = "Tom";
let lastName = "Cat";
function getFullName(firstName,lastName){
    return firstName + " " + lastName;
}
console.log(getFullName(firstName,lastName));

//Task 9
function greeting(firstName, lastName){
    let greet = "Hello, ";
    let fullSentence = getFullName(firstName,lastName);
    return greet + fullSentence + "!";
}
console.log(greeting(firstName,lastName));

//Task 10
var html = (
    "<div>" + "<h1>" + greeting(firstName,lastName) +"</h1>" + "</div>"
    );
console.log(html);

//Task 11
let string1 = "  The name of our game  ";
// Потрібно отримати такі результати

console.log(string1.trim()); // "The name of our game"
console.log(string1.trimStart());// "The name of our game  "
console.log(string1.trimEnd())// "  The name of our game"

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
console.log(phoneNumber.trim()); // => '555-123'
console.log(phoneNumber.trimStart()); // => '555-123 \n'

//Task 12
let sentence = 'Always look on the bright side of life';
console.log(sentence.includes("look up"));
console.log(sentence.includes("look on"));
console.log(sentence.includes("look on", 8));

//Task 13
console.log(sentence.indexOf("l"));
console.log(sentence.indexOf("l", 3));
console.log(sentence.indexOf("L"));

//Task 14
console.log(sentence.substring(7));
console.log(sentence.substring(0,6));
console.log(sentence.substring(7,12));

//Task 15
function validation(logName){
    const data = /^[a-z0-9_]{8,16}$/;
    let matched = logName.match(data);
    if (data.test(logName)){
        console.log ("Login is valid");
        return true;
    } else{
        console.log ("Login is invalid");
        return false;
    }
}
  validation("password1111");

//Task 16
function emailCheck(email) {
    const data = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  
    let matched = email.match(data);
    if (data.test(email)) {
      console.log("Email is valid", matched);
      return true;
    } else {
      console.log("Email is invalid");
      return false;
    }
  }
  emailCheck("test@test.com");

//Task 17
let sentenceAdded = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateText(text){
    return text.substring(0,50);
}
console.log(truncateText(sentenceAdded));

function truncateText(text){
    return text.substr(0,50);
}
console.log(truncateText(sentenceAdded));