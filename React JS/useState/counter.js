function Counter() {
  let [count, setCount] = React.useState(0); //[Value,Method to update]
  const updateplus = () => {
    setCount(count + 1);
  };
  const updateminus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount((count = 0));
  };

  return (
    <div>
      <h1>number: {count}</h1>
      <button
        onClick={() => {
          updateplus();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          updateminus();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
ReactDOM.render(<Counter />, document.getElementById("container"));
