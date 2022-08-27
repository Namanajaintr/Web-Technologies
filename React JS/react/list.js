const listElement = React.createElement(
  "ul",
  null,
  React.createElement(
    "li",
    { className: "car", style: { color: "white" } },
    "car"
  ),
  React.createElement(
    "li",
    { className: "jeep", style: { color: "pink" } },
    "jeep"
  ),
  React.createElement("li", { className: "moped" }, "moped")
);
ReactDOM.render(listElement, document.getElementById("container"));

// looping by map method
const mobiles = ["one+", "apple", "samsung", "realme", "redmi"];
const mobileloop = mobiles.map((mobile, ind) => {
  return React.createElement("li", { key: mobile + ind }, mobile);
});
const allitems = React.createElement("div", null, listElement, mobileloop);
ReactDOM.render(allitems, document.getElementById("container"));
