// jsx
// javascript xml
// js compiler named babel translates jsx code into browser understandable code

const jsxelement = <h1>HELLO WORLD</h1>;
console.log(jsxelement);
ReactDOM.render(jsxelement, document.getElementById("container"));

const mobiles = ["one+", "apple", "samsung", "realme", "redmi"];
const names = ["nayana", "namana", "nuthana"];
const element = (
  <h1>
    HELLO {names} to the {mobiles}WORLD
  </h1>
);
ReactDOM.render(element, document.getElementById("container"));

const loopmobile = mobiles.map((val, ind) => {
  return <h3>the mobiles {val} are</h3>; // React.createElement(h3,null,"the mobiles are")
});
ReactDOM.render(loopmobile, document.getElementById("container"));

const ulElement = (
  <ul>
    {mobiles.map((value) => {
      return <li>{value}</li>;
    })}
  </ul>
);
ReactDOM.render(ulElement, document.getElementById("container"));

const allItems = React.createElement(
  "div",
  null,
  jsxelement,
  ulElement,
  loopmobile,
  element
);
ReactDOM.render(allItems, document.getElementById("container"));
