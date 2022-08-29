function Object1() {
  let [person, setPerson] = React.useState({
    fn: "hima",
    ln: "N D",
  }); //creating a state first arg is value and method to update
  const updatePerson = () => {
    setPerson({ ...person, fn: "vibha" }); //to retain ln as same we use shallow copy for same obj with diff reference
  };
  return (
    <div>
      <h1>{person.fn}</h1>
      <h1>{person.ln}</h1>
      <button
        onMouseOver={() => {
          updatePerson();
        }}
      >
        click me
      </button>
    </div>
  );
}
ReactDOM.render(<Object1 />, document.getElementById("container"));
