console.log("start");
10 === 10 ? console.log("equal") : console.log("not equal");
// console.log();(); the above is looking like this()() this is called function curying

function test() {
  function inner() {
    console.log("inner function");
    return inner;
  }
}
test()(); //this is called function curying
