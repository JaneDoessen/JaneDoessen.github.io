//Task 1 
function calculate(operation, value, numbers) {
    let result = value;
    for (const number of numbers) {
      result = operation(result, number);
    }
    return result;
   } 
function sum(n1, n2) {
return n1 + n2;
}
function multiply(n1, n2) {
return n1 * n2;
     }
console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));

//Task 2
let student_names = ["Wick", "Malcolm", "Smith"]
const studName = student_names.map((value, index, student_names) => (
    `name:| ${value} | index: ${index} | array: [ ${student_names}]`)
);
console.log(studName);

//Task 3
const students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
const maxGrade = 600;

students_information.map(function(studGrade){
    const gradePercentage = (studGrade.degree/maxGrade) * 100;
    console.log ({name: studGrade.name, degree: studGrade.degree, percentage: gradePercentage});
});

//Task 4
const taskFourArray = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
const reduceArray = taskFourArray.reduce((accumulator, currentValue) =>
{
    return accumulator.concat(currentValue);
}, []);
console.log(reduceArray);

//Task 5

Array.prototype.upperCase = function(){
    let i;
        for (i=0; i<this.length; i++){
            this[i]=this[i].toUpperCase()
        }
    }; 
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}
myFunc();