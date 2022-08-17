// MATH OBJECT

// min method accept the list of value as argument and returns the minimum value
// max method returns the maximum value from the list
// pow method takes 2 arguments and returns the power value
// floor method rounds off to the lower value
// ceil method rounds off to the greater value
// random method displays random values each time bn 0-1

let number = [98, 235, 678, 34, 67, 09, 12, 6789];
console.log(Math.min(number));

let maxnumber = Math.max(12, 65, 78, 9843);
console.log(maxnumber);

let power = Math.pow(2, 3);
console.log(power);

let floornumber = Math.floor(20.9);
console.log(floornumber);

let ceilnumber = Math.ceil(20.1);
console.log(ceilnumber);

let randomnumber = Math.random();
console.log(randomnumber);

let names = [
  "Avi",
  "Akshatha",
  "Girish",
  "namana",
  "nayana",
  "nuthana",
  "prajwal",
  "vibhav",
];
let randindex = Math.floor(Math.random(names) * names.length);
console.log(names[randindex]);
