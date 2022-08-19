//ARRAY METHODS

// 1. PUSH METHOD
// push method will ADDS an element at the END of the array
// returns a new array if we push any values
// else returns LENGTH of an array-push()
let myarray = [12, 34, 567, 235, 7];

myarray.push(50);
console.log(myarray);
myarray.push(223, 46, 50, 457);
console.log(myarray);
console.log(myarray.push()); //returns length of an array

console.log("======================================================");

// 2. POP METHOD
// doesnot take any arguments
// REMOVES the LAST element of an array
// returns only the REMOVED element in an array-pop()
console.log(myarray.pop());
console.log(myarray);

console.log("======================================================");

// 3. UNSHIFT METHOD
// takes element as an argument and ADDS to BEGGINING of an array
// returns the LENGTH of an array-unshift()
let fruits = ["apple", "mango", "cherry", "banana"];

fruits.unshift("lemon");
console.log(fruits);
console.log(fruits.unshift());

console.log("======================================================");

// 4. SHIFT METHOD
// doesnot take any arguments
// REMOVES the FIRST element of an array
// returns only the REMOVED element in an array-shift()
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

console.log("======================================================");

// 5. CONCAT METHOD
// JOINS two or more arrays
// returns a new joined array
// doesnot change the original array
let a = [20, 45, 67];
let b = [45, 78, 345];
let c = [7845];
let res = a.concat(b, c);
console.log(res, "array");

let arr = [20, 45, [12, 45], 67];
let brr = [45, 78, [345, [3]], 67];
let crr = arr.concat(brr);
console.log(crr, "nested array");

// 6. FLAT METHOD
// this makes nested arrays as SINGLE ARRAY
console.log(arr.flat());
console.log(brr.flat());
console.log(crr.flat());

console.log("======================================================");

// 7. JOIN METHOD
// converts ARRAYS in to STRINGS
const cities = ["pune", "chennai", "Tmk", "Bang", "hassan", "mumbai"];

let string = cities.join("  "); //default commas
console.log(string);

console.log("======================================================");

// 8. SPLIT METHOD
// converts STRINGS in to ARRAYS
// returns the new array and does not change the original string.
let data = "I am very fedoff today";
let string1 = data.split(" ");
console.log(string1);

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);
console.log(myArray[1]);
console.log(text.split(" ", 3));

console.log("======================================================");

// 9. FINDINDEX
// returns the FIRST index positiion of particular element which satisfies the conditiion
// this method takes a CALLBACK FUNCTION as an argument
let findindex = cities.findIndex((pin) => {
  return pin.length > 3;
});
console.log(findindex);

// OR

let arraydata = [12, 1, 45, 67, 45];
function eligibility(age) {
  return age > 18;
}
let x = arraydata.findIndex(eligibility);
console.log(x);

console.log("======================================================");

// 10. INDEXOF METHOD
// returns the FIRST index position of the specified value
// this method takes a VALUE as an argument
console.log(arraydata.indexOf(45)); //returns the first index position
console.log(arraydata.indexOf(5)); // not found
console.log(cities.indexOf("Bang"));

console.log("======================================================");

// 11. ISARRAY METHOD
// takes value as an argument
// returns BOOLEAN value
console.log(Array.isArray(arraydata));
console.log(Array.isArray(cities));
let e = 45;
console.log(Array.isArray(e));

console.log("======================================================");

// 12. REVERSE METHOD
// print the words in reverse order
let lambda = "before a good leader be a good human";
let split = lambda.split(" ");
console.log(split);
let rev = split.reverse();
console.log(rev);
let join = rev.join(" ");
console.log(join);

console.log("======================================================");

// 13. MAP METHOD
// is used to loop an array
// takes a call back function(value,index,original array)
// can change the values(add/sub) in an array
let reverse = "";
for (let i = split.length - 1; i--; ) {
  reverse += split[i];
}
console.log(reverse);

rev.map((value, index, arr) => {
  console.log(value, "map");
});

let maparr = [34, 56, 78, 90, 12, 56, 78];
let mapped = maparr.map((value) => {
  return value + 10;
});
console.log(mapped, "this is map method");

console.log("======================================================");

// 14. FILTER METHOD
// creates an array
// cannot change the values(add/sub) in an array
rev.filter((value, index, arr) => {
  console.log(value, "filter");
});

let filterarr = [34, 56, 78, 90, 12, 6, 78, 0];
let filtered = filterarr.filter((value) => {
  return value - 10;
});
console.log(filtered, "this is filter method");

console.log("======================================================");

// 15. FOREACH METHOD
// executes a provided funtion once per each array
// method calls a function for each element in an array.
const fruit = ["apple", "orange", "cherry"];
fruit.forEach(myFunction);
function myFunction(item, index) {
  console.log(index, item);
}

let hobies = ["cricket", "carrom", "gardens", "plants", "sun", "moon"];
hobies.forEach(function (val, ind, arr) {
  console.log(val, ind, arr);
});

console.log("======================================================");

// 16. INCLUDES METHOD
// returns TRUE or FALSE
console.log(hobies.includes("carrom"));
console.log(hobies.includes("carom"));

console.log("======================================================");

// 17. FIND METHOD
// takes callback function
// returns the element not index which matches the condition
const found = hobies.find((value) => value.length > 5);
console.log(found);

console.log("======================================================");

// 18. SORT METHOD
// arrange the elements in ascending or descending order
// returns new array with sorted order
// default ascending
console.log(hobies.sort());
console.log(filterarr.sort());
console.log(hobies);
console.log(filterarr);

let sortarr = [15, 18, 78, 13, 23, 44, 54, 32, 99, 100];
sortarr.sort();
console.log(sortarr);

sortarr.sort((a, b) => {
  return a - b;
});
console.log(sortarr, "Ascending order");

sortarr.sort((a, b) => {
  return b - a;
});
console.log(sortarr, "Desscending order");

console.log("======================================================");

// 19. SPLICE METHOD
// splice(start-index , no of elements to be removed , no of elements to be added)
// The splice() method can be used to ADD or REMOVE items in an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The third and forth parameters defines the elements to be added
// returns the deleted array-222 line
// AFFECTS the original array
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "banana"];
const spliced = fruits1.splice(2, 2, "Lemon", "Kiwi");
console.log(spliced);
console.log(fruits1);
// adding elements without deleting
const spliced2 = fruits1.splice(2, 0, "pump", "peach");
console.log(spliced2);
console.log(fruits1);

console.log("======================================================");

// 20. SLICE METHOD
// slice(start,end-1)
// The slice() method can be used to SLICE OUT/REMOVE the elements
// DOESNOT AFFECTS the original array
let clgs = ["SSIT", "CIT", "AIT", "KIT", "NIST", "CHRIST"];
console.log(clgs.slice(0));
console.log(clgs.slice(1, 3));
console.log(clgs.slice(4));
console.log(clgs.slice(-2));
const data1 = clgs.slice(2, 4);
console.log(data1);
console.log(clgs.slice(2, -1));
console.log(clgs);

console.log("======================================================");
