// debugger;

console.log(student); //undefined

var student = "namana";
var student = 456;
console.log(student); //456

// to avoid these conflicts we have let and cons key words
// are introduced in ES6

var d;
console.log(a); //undefined
console.log(b); //undefined
console.log(c); //undefined
console.log(d); //
var a = 10;
var b = 20;
var c = 30;
console.log(a); //10
console.log(b); //20
console.log(c); //30

//let and const

// temporal dead zone is the time gap betweeen variable dec and variable init
// you cannot access the variables untill they are assigned with some value

// console.log(sec); //error - undefined
let sec = "b";
// console.log(constant); //error - undefined
const constant = 567;

let x = 345;
console.log(x);
// let x=20; // REDECLARATION of variables is not possible in LET

let m = 97;
x = m;
console.log(x);
// REINITIALIZATION of variables is possible in LET

const y = 550;
console.log(y);
// const y=34; // REDECLARATION of variables is not possible in CONST

const n = 89;
// y = n;
console.log(y);
// REINITIALIZATION of variables is not possible in CONST

// console.log(num); //error
const num1 = 20;
let num2 = 50;
num1 = num2; //reintialization using const is not possible
console.log(num1);

let num3 = 20;
const num4 = 50;
num3 = num4; //reintialization using let is possible
console.log(num3);
