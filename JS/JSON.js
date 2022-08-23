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
