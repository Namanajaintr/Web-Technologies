// FUNCTION
// funct decl/func defn-Func keyword,name and block/body
// funct call
// funct expr

// 1. NAMED FUNCTION
// syntax: functionkeyword functionname(parameters){
//     statements
// }
// functionname(arguments)
function add(a, b) {
  return a * b;
} //function declaration

console.log(add(2, 7)); //function call

// 2. ANONYMUS FUNCTION - no functionname
// syntax: letkeyword variablename=functionkeyword(parameters){
//     statements
// };
// variablename(arguments)
let multiply = function (a) {
  return a * a;
}; //function expresssion
console.log(multiply(5));

// 3. ARROW FUNCTION - ES6 feature no functionkeyword and functionname
// syntax: letkeyword variablename=(parameters)=>{
//     statements
// }
// variablename(arguments)
let arrowfun = (x, y) => {
  return x * y;
};
console.log(arrowfun(5, 3));

// 4. IMMEDIATELY INVOKED FUNCTION - functionname not mandatory
// syntax: (functionkeyword(parameters){
//  statements
// }
// )(arguments);
(function functionname(m, n) {
  let diff = m - n;
  console.log(diff);
})(5, 3);

// 5. CALLBACK FUNCTION
// passing a function as an argument ,
// to another function using function expression

function findIsEligibleOrNot(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let result = findIsEligibleOrNot(21);
function printIsEligiblrOrNot(arg) {
  if (arg == true) {
    console.log("eligible for voting");
  } else {
    console.log("not eligible for voting");
  }
}
printIsEligiblrOrNot(result);

// example 1 (named func)
function addn(a, b) {
  let sum = a + b;
  console.log(`sum of ${a}and ${b} is `, sum);
}
addn(4, 5);
addn(757, 7890);

// example 2 (arrow func)
// if only one parameter no need of paranthesis and curlybraces
let product = (a) => a * a;
console.log(product(4));
// if we dont have parameter or multipleparameter paranthesis is required
let names = () => console.log("data is stored");
names();
