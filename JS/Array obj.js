// ARRAY OBJECT
//Array is a collection of all data types

// without using new keyword
const arr = ["akshay", { addr: "tmk", pin: 54789 }, [2.4, 6.5, 49.87], 9876];
console.log(arr);

// with using new keyword
const newarr = new Array("apple", "mango", 456, [34.67, 45.89]);
console.log(newarr);

console.log("--------------------------------");

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2); //false array-reference types cannot be compared
console.log(arr1 === arr2); //false

console.log(null == 0); //false
console.log(null > 0); //false
console.log(null >= 0); //true

console.log(1 < 2 < 3); //true
// true<3=>1<3=>true
console.log(1 > 2 > 3); //false
// true>3=>1>3=>false
