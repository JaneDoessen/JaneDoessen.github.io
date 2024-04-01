// Task 1
const HOneTag = document.getElementsByTagName('h1');
console.log("Type of Object:", typeof HOneTag);
console.log("Length of Object:", HOneTag.length);

for (i=0; i<HOneTag.length; i++) {
    console.log("Separate Element:", HOneTag[i]);
}

// Task 2
const paragraphOne =  document.querySelector('#p1');
paragraphOne.style.backgroundColor = "gold";

// Task 3
const paragraphTwo =  document.querySelector('#p2');
paragraphTwo.style.cssText = "background-color:gold; color: blue; font-size: 2rem";


// Task 4
const paragraphThree =  document.querySelector('#p3');
paragraphThree.classList.add('Third');

// Task 5
const paragraphFour =  document.querySelector('#p4');
paragraphFour.classList.add("fourth", "border");

// Task 6
const  contClass = document.querySelectorAll('.container');

for (i=0; i<contClass.length; i++) {
    const firstChild = contClass[i].firstElementChild;
    console.log(firstChild);
}

// Task 7 
for (i=0; i<contClass.length; i++) {
    const firstChildCont = contClass[i].firstElementChild.textContent;
    console.log(firstChildCont);
}

// Task 8

const headers = document.querySelectorAll(".container header");
const classes = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headers.length; i++) {
  const id = headers[i].id;
  const classList = headers[i].classList;
  
  const newHeader = document.createElement(`h${i+1}`);
  newHeader.textContent = headers[i].textContent;

  if (id) newHeader.id = id;
  classList.forEach(className => newHeader.classList.add(className));

  headers[i].parentNode.replaceChild (newHeader, headers[i]);
  }

  for (let i = 0; i < headers.length; i++) {
  headers[i].classList.add(classes[i]);
}