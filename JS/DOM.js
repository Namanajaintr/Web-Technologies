// Window obj is the Global obj
var x = 90;
m = 90;
let v = "k";
console.log(window);
console.log(window.history);
console.log(window.location);
console.log(window.document);
console.log(window === this);

// DOCUMENT OBJECT MODEL
// DOM is a tree structure of html element
// can create html elements dynamically
// can delete html elments dynamically
// can render the DOM elements into the browser by DOM methods
// DOM methods: getElementById(), getElementByClass(), queryselector

//
const idelement = document.getElementById("demo");
console.log(idelement);
idelement.innerText = "DOM";

// queryselector method will return first tag which comes in the html tree str
const qselementtag = document.querySelector("h1");
console.log(qselementtag);
// class selecting for queryselector
const qselementclass = document.querySelector(".firsth1");
console.log(qselementclass);

// class selector
// returns multipe elements in an array
const classelement = document.getElementsByClassName("text");
console.log(classelement);

const elements = document.getElementsByClassName("data");
console.log(elements);

for (let i = 0; i < elements.length; i++) {
  if (i === 0) {
    elements[i].innerText = "nayana";
  } else if (i === 1) {
    elements[i].innerText = "S R";
  } else {
    elements[i].innerText = "banglore";
  }
}

// getElement by tag name
// returns an array
const tagname = document.getElementsByTagName("p");
console.log(tagname);

// queryselectorAll will change all the elements of a particular class
const qselementclass1 = document.querySelectorAll(".data");
console.log(qselementclass1);

for (let i = 0; i < qselementclass1.length; i++) {
  qselementclass1[i].style.fontSize = "30px";
  qselementclass1[i].style.backgroundColor = "blue";
  qselementclass1[i].style.color = "red";
}

// creating an element in JS
const h1element = document.createElement("h1");
h1element.innerText =
  "this is new one to be added to html DOM tree str thro JS";

document.body.appendChild(h1element);

h1element.style.fontSize = "30px";
h1element.style.backgroundColor = "orange";
h1element.style.color = "green";
