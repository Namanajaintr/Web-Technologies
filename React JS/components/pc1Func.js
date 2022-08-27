function Mart(props) {
  let data = ["chocolates", "fuits", "veggies", "balls", "pens", "spinach"];

  let data2 = [
    { fn: "tyfo", ln: "huhi", ph: 65675 },
    { fn: "tyg", ln: "huh", ph: 6567 },
    { fn: "ty", ln: "hu", ph: 656 },
    { fn: "t", ln: "h", ph: 65 },
  ];
  return (
    <div>
      <h3>Welcome to mart</h3>
      <Home dataitem={data} />
      {/* Home is child component of parent component Mart */}
    </div>
  );
}
function Home(props) {
  return (
    <div>
      <h3>This are mart items</h3>
      {props.dataitem.map((value, ind) => {
        return <li key={ind}>{value}</li>;
      })}
      {/* <h3>{props.data2.fn}</h3> */}
    </div>
  );
}
ReactDOM.render(<Mart />, document.getElementById("container"));
