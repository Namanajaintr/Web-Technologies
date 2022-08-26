// FOR LOOP
// only loops with array not object
// break stmnts are not supported
// doesnot ignore empty elements shows undefined

let person = ["Avi", 90, " ", , "30/july/2000"];
for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

// FOR oF LOOP
// syntax only differs with for and for of

for (let i of person) {
  console.log(i);
}

let students = [
  "Avi",
  "Akshatha",
  "Girish",
  "namana",
  "nayana",
  "nuthana",
  "prajwal",
  "vibhav",
];
for (let i of students) {
  console.log(i);
}

let fruits = ["pineapple", "cherry", "muskmelon", "mango", "kiWi"];
fruits[("carrot", "beans")];
// FOR loop ignore this extra property which donot have index
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let pens = [
  {
    brand: "cello",
    price: 45,
    type: "ball",
    color: "blue",
  },
  {
    brand: "totem",
    price: 3,
    type: "ink",
    color: "red",
  },
  {
    brand: "bright",
    price: 25,
    type: "gel",
    color: "white",
  },
  {
    brand: "parker",
    price: 5,
    type: "ball",
    color: "pink",
  },
];
for (let j = 0; j < pens.length; j++) {
  if (pens[j].price > 5) {
    console.log(pens[j]);
  }
}

for (let i of pens) {
  if (i.price > 5 && i.type == "ball") {
    console.log(i);
  }
}

for (let j = 0; j < pens.length; j++) {
  if (pens[j].price > 5 && pens[j].type == "ball") {
    console.log(pens[j]);
  }
}

// FOR IN LOOP
// works looping with OBJECTS and arrays
// it ignores empty elements
// doesnot ignore extra properties which donot have index

let persons = {
  firstname: "megha",
  lastname: "g",
  Gender: "f",
  phNumber: 123456789,
};

// for in loop we use key for an OBJECT
for (let key in persons) {
  //   console.log(key);
  console.log(`${key}-${persons[key]}`);
}

// for in loop we use VALUE for an ARRAY
for (let value in pens) {
  if (pens[value].price > 5 && pens[value].type === "ball") {
    console.log(pens[value]);
  }
}
