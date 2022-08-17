// globally this refers to global/window object
console.log(this);
console.log(window);
console.log(this === window);

// Inside a object this refers to the current object
const personObj = {
  fn: "namana",
  ln: "jain",
  getfullname: function () {
    return this.fn + this.ln;
  },
};
console.log(personObj.getfullname());
