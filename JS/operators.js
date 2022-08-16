// ARITHMETIC OPERATORS

let a = 15;
let b = a++; // the increment operator increments and returns the value before increment
let c = ++a; // it increments the value and returns the incremented value
console.log(b);
console.log(c);
console.log(b * c);
console.log(a + b);
console.log(c - a);
console.log(b / c);
console.log(c % a);

// COMPARISION OPERATORS

let num = 10;
let num1 = "10";
console.log(num == num1); // true coz it will check only the value
console.log(num === num1); // false coz it will check along with the data type

let str = "true";
let num2 = true;
console.log(str == num2);

let x = "30";
let y = 40;
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);
console.log(x !== y);

// CONDITIONAL OPERATOR OR TERNARY OPERATOR

let age = 12;
console.log(age >= 18 ? "eligibale for voting and dating" : "not eligible");
let age1 = 0;
console.log(age1 ? "True" : "False");

let marks = 9;
console.log(
  marks >= 80
    ? "distiction"
    : marks >= 60
    ? "first"
    : marks >= 45
    ? "second"
    : "fail"
);

let mark = 45;
if (mark >= 80) {
  console.log("distinction");
} else if (mark >= 60) {
  console.log("first");
} else if (mark >= 35) {
  console.log("second");
} else {
  ("fail");
}

// TYPEOF OPERATOR

const name = "megh";
console.log(typeof name); // string

const flag = 1234567890;
console.log(typeof flag); // number

const data = {
  name: "name",
  sec: "c",
  sal: 40000,
};
console.log(typeof data); //object

const arr = [1, 2, 45, 7999];
console.log(typeof arr); //object

// CONCATINATION OPERATOR

console.log("hello" + "" + "world");
console.log("5" + 5 + " hi world");
console.log(5 + 5 + "world" + 5);
console.log("number" + "10" + 30 + 50 + "is true");
console.log(5 + "data is nature" + 7);
