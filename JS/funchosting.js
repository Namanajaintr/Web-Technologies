// hoisting ia tech which moves var decl and func decl to the top of there scope
// code exec begins
console.log("a outside the function", a); //undefined

var a = 20;
var b = 30;

console.log("b outside the function", b); //30

// variable hoisting inside a function
function test() {
  console.log("b outside the function", b); //undefined
  var b = 10;
  console.log("a outside the function", a); //20
  console.log("b outside the function", b); //10
}
test();

// func hoisting is all func decl will be move to top of scope
// func hoisting is possible only for named func

add(2, 4);
var name = "mega";
function add(a, b) {
  console.log(a + b);
}

// func hoisting is not possible with anonymus/arrow/IIF
// coz it behaves as a variable hoisting
greet;
var greet = function () {
  console.log("hmm");
};
