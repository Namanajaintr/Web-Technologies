function Football() {
  const shoot = () => {
    console.log(props.name);
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<Football name="namana" />);
