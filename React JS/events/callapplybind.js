person = {
  name: "james",
  dataFun: function (thing) {
    console.log(this.name + "hello dear" + thing);
  },
};
person.dataFun("world");

person.dataFun.call({ name: "raj" }, "world");
person.dataFun("world"); //doesnot affect original object

var func = person.dataFun.bind({ name: "prety" });
func("world"); //bound to that particular function
