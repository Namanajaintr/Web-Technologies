// ...MAGICAL DOTS
// 1. SPREAD OPERATOR - take a copy
// 2. REST OPERATOR - no. of args

// REST OPERATOR
function add(a, b) {
  console.log(a + b);
}
add(1, 2, 3, 4); //3(1+2)

// rest parameter allows u to add dynamic arguments
function add(...a) {
  let sum = 0;
  for (let i of a) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}
add(1, 2, 3, 4);
add(1, 2, 4, 5, 8, 95, 4, 235, 78, 9, 70, 7, 2);

// primitive types copied by value
let x = 30;
let y = x + 10;
console.log(y); //40
console.log(x); //30

// reference types copied by a reference
let m = {
  name: "amm",
  lab: "b",
  age: 22,
};

let n = { ...m }; //spread operator
m.name = "pala";
n.age = "30";
console.log(m); //name:"pala",lab:"b", age:22
console.log(n); //name:"amm",lab:"b",age:30

// shallow copy affects only the first layer of nested object
let person = {
  fname: "nayana",
  lname: "S R",
  moreDetails: {
    bg: "A+",
    gender: "F",
    addr: {
      city: "Tmk",
      pin: 572101,
    },
  },
  dob: "5 june Dec",
};

let personCopy = { ...person }; //SHALLOW COPY
person.fname = "namana";
person.moreDetails.bg = "AB+";
person.moreDetails.addr.city = "hassan";
console.log(person); //namana,AB+
console.log(personCopy); //nayana,AB+

// deep copy affects all levels including nested of array/object
// new obj will be created new reference
let deepCopy = {
  ...person,
  moreDetails: { ...person.moreDetails.bg },
  moreDetails: { ...person.moreDetails.addr.city },
}; //DEEP COPY

console.log(person);
console.log(personCopy);
console.log(deepCopy);

// JSON.Parse() : this will convert JSONobject to JSobject
// JSON.Stringify() : this will convert from JSobject to JSONobject
const personCopyJson = JSON.parse(JSON.stringify(person));
console.log(personCopyJson);
console.log(personCopy);

// DESTRUCTURING
// destructuring object
// accesising an obj without dot and objname
// assigning all the elemnts of object to a objectname
let person2 = {
  name: "avi",
  ph: 134255,
  addr: "tmk",
  email: "...@gmail.com",
};
let { name, ph, addr, email } = person2;
console.log(ph);

// destucturing array
let [a, d] = [23, 45];
console.log(a);
