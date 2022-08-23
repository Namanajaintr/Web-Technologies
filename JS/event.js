// Event are some actions
function changeName(user) {
  const element = document.getElementById("name");
  element.innerText = user;
}

// hover
let changeColor = () => {
  const elem1 = document.getElementById("changeColor");
  elem1.style.backgroundColor = "red";
};
let removeColor = () => {
  const elem2 = document.getElementById("changeColor");
  elem2.style.backgroundColor = "green";
};

function setBodyAttr(attr, value) {
  console.log(value);
  console.log(attr);
  if (document.body) {
    document.body[attr] = value;
  } else {
    throw new Error("no support");
  }
}
