function MyApp() {
  let [name, setName] = React.useState("avi"); //creating a state first arg is value andmethod to update
  const updateName = () => {
    setName("Hima");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button
        onMouseover={() => {
          updateName();
        }}
      >
        click me
      </button>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("container"));
