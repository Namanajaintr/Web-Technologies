// CLASSES AND OBJECTS
// class is a bleprint
// object is a instance of class

// class definition
class vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `the name of the bike ${this.name}the maker of the bike ${this.maker}the engine of the bike ${this.engine}`;
  }
}
// object creation
let bike = new vehicle("ninja", "kawasakhi", "v5");
console.log(bike.getDetails());
