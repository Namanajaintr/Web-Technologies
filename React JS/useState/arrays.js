function Array1() {
  let [bikes, setBikes] = React.useState([
    "dio",
    "hero",
    "honda",
    "jupiter",
    "ns200",
    "ktm",
    "ninja",
  ]);
  console.log(bikes);
  function update() {
    bikes.pop();
    setBikes([...bikes]);
  }
  return (
    <div>
      {bikes.map((val, ind, arr) => {
        return <p key={ind}>{val}</p>;
      })}
      <button
        onClick={() => {
          update();
        }}
      >
        click me
      </button>
    </div>
  );
}
ReactDOM.render(<Array1 />, document.getElementById("container"));
