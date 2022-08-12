// STRING METHODS

var str = "plants and nature";
str.toUpperCase();
console.log(str);
// plants and nature-IMMUTABLE

var str = "plants and nature";
var upper = str.toUpperCase();
console.log(upper);
// PLANTS AND NATURE

var greet = "Good Morning";
var greet = greet.toLowerCase();
console.log(greet);
// good morning

console.log(greet.charAt(5));
// m-displays the particular character at that index

console.log(greet.indexOf("o"));
// 1-returns the index position of the first occurance of character passed

var wish = "Good AfterNoon";
console.log(wish.includes("Noon"));
// true-included

console.log(wish.replace("AfterNoon", "morning"));
// Good morning

console.log(wish);
// good AfterNoon

// sub str
var data = "Welcome to javascript";
const substr = data.substr(9, 5);
console.log(substr);
// o jav

// sub string
var substring = data.substring(9, 4);
console.log(substring);
// ome t

var email = "             megha@gmail.com     ";
console.log(email);
console.log(email.trim());
