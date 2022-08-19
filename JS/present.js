// SPLIT METHOD
// The split() method splits a string into an array of substrings.
// The split() method returns the new array and does not change the original string.
// If (" ") is used as separator, the string is split between words.

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);
console.log(myArray[1]);
console.log(text.split(" ", 3));
