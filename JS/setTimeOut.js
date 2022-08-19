// ASYNCRONOUS
add();
console.log("start");

function add() {
  console.log("i am inside function");
  setTimeout(() => {
    console.log("i am inside add function 1");
  }, 10000);
  setTimeout(() => {
    console.log("i am inside add function 2");
  }, 5000);
}
add();
setTimeout(() => {
  console.log("i am outside function");
}, 0);
console.log("hello");
console.log("end");

// flow-i am inside function,start,hello,end
// settimeout flow-
