// Task 3
const guessNumber = 3; 
let inquiry = prompt ("Guess the number!");
    if (inquiry==guessNumber) 
    {alert("Congratulations, You did it!");}
    else if (inquiry>guessNumber) 
        {alert ("The number is too long");}
    else if (inquiry<guessNumber) 
        {alert("The number is short");}
    else {alert ("Wrong inquiry!");}


//Task 4.1
let day = prompt("Name the day of the week");
day=day.toLowerCase();
switch (day) {
    case "monday":
    case "понеділок":
    console.log("Start of the work week!");
    break;
    case "friday":
    case "пʼятниця":
    console.log("End of the work week!");
    break;
    default:
    console.log("A regular day");}

// Task 4.2
// let day = prompt("Name the day of the week");
// day = day.toLowerCase();
// if(day==="monday" || day==="понеділок") 
//     {alert("Start of the work week!");}
// else if(day==="friday" || day==="пʼятниця") 
//     {alert("End of the work week!");}
// else {alert("A regular day");}


// Task 5.1
let score=prompt("What is your score?");
if (score<50) {alert("Your grade is F");}
else if (score<70) {alert("Your grade is D");}
else if( score>>80) {alert("Your grade is C");}
else if (score>90) {alert("Your grade is B");}
else{alert("Your grade is A")};

// Task 5.2

// let score=prompt("What is your score?");
// let message = (score<=49) ? 'Your grade is F':
//     (score>50) ? 'Your grade is D':
//     (score>70) ? 'Your grade is C':
//     (score>80) ? 'Your grade is B':
//     'Your grade is A';
//     alert(message);

//Task 6
let firstName = null;
let lastName = undefined;
let username = (firstName || lastName) ?? "Guest";

console.log(username); // "Guest"