// JSON - java script object notation

let person = {
  name: "avi",
  ph: 76655,
  dob: "23 dec 2000",
};
// stringify()- converts js object to json object
const JSONobj = JSON.stringify(person);
console.log(JSONobj);

// parse()- converts json object to js object
const JSobj = JSON.parse(JSONobj);
console.log(JSobj);

// callback function - passing function as an argument to another function
// y we need - to handle the asynchronous behaviour of JS

function first(callback) {
  setTimeout(() => {
    console.log("first function");
    callback();
  }, 5000);
}

function second() {
  setTimeout(() => {
    console.log("second function");
  }, 3000);
}
first(second);

// // we need callback to handle asynchronous behavoiur
// // If the code is large and nested callabcks (callback hell/pyramid of doom) is difficult to traceback
// const animall = (animate) => {};
// setTimeout(() => {
//   animate();
//   setTimeout(() => {
//     animate();
//   });
//   setTimeout(() => {
//     animate();
//   });
// }, 2000);

// PROMISES
// To overcome callback hell and to handle asyn behaviour of js we introduce promises
// promises are asynchronous and web api
// 3 states : pending , resolved , rejected

console.log("start");
new Promise(function (resolve, reject) {
  if (10 > 4) {
    resolve("success");
  } else {
    reject("error");
  }
})
  .then((va) => {
    console.log(va);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("ended");

const mypromis = new Promise(function (res, rej) {
  setTimeout(() => {
    res("successfully done");
  }, 4000);
});
mypromis
  .then((dat) => {
    console.log(dat);
  })
  .catch((pat) => {
    console.log(pat);
  });

//if all promises are resolved then only goes to then block
Promise.all([frstProm, mypromis])
  .then(() => {})
  .catch(() => {});
//if any one of the promises are resolved then only goes to then block
Promise.any([frstProm, mypromis]);
//which of the promises are resolved frist then that goes to then block
Promise.race([frstProm, mypromis]);
