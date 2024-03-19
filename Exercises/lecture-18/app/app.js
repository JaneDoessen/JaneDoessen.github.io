    
//Task 1.1
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
      return confirm('Did parents allow you?');
    }

//Quesitons
//   1.2. Чи буде функція працювати інакше, якщо видалити else? - ні, буде працювати без змін.
//   1.3. Чи є різниця в поведінці цих двох варіантів і чому? - ні, немає. функція завершується на return.


// <!--Task 2.1
  function checkAge(age) {
      return age > 18 ? true: confirtm ("Did parents allow you?");
      }

// Task 2.2
    function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?');
    }


// Task 3
    function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
    }
// Чи потрібні дужки навколо age > 18 - ні, вони не обовʼязкові, проте робліть код кращим для читання

// Task 4.1
      function minOne(a, b) {
  if (a < b) {
      return a;
  } else {
      return b;
  }
  }
  console.log(minOne(2, 5));
  console.log(minOne(3, -1));
  console.log(minOne(1, 1));

// Task 4.2
  function minTwo(a, b) {
  return a < b ? a : b;
  }
console.log(minTwo(2, 5));
console.log(minTwo(3, -1));
console.log(minTwo(1, 1));

//Task 5
function pow(x, n){
    return (n==1) ? x : (x * pow(x, n-1));
    }

let x = parseFloat(prompt ("X input"));
let n = parseFloat(prompt ("N input"));

if (n < 1 || !Number.isInteger(n) || x < 1 || !Number.isInteger(x)) {
    alert("Indicate integer number, please!");
  } else {
    alert(pow(x, n));
  }


//Task 6
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    "Do you agree?",
    () => alert("Youe answer is 'YES'"),
    () => alert("Your answer is 'NO'")
  );
  

// Task 7
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }; 
  function itsYes(){
    alert("You answer is 'YES'");
  }
  function itsNo(){
    alert("You answer is 'NO'");
  }
  ask("Do you agree?",itsYes,itsNo);



  //Task 8
  
    function A() { 
        console.log('A was called');
        return undefined;
    }
    function B() {
        console.log('B was called');
        return false;
    }
    function C() {
        console.log('C was called');
        return "foo";
    }

    //8.1
    console.log(A() ?? C());
    //8.2
    console.log(B() || C());
