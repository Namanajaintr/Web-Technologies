// passing the data from parent to child

function App(props) {
  let name = "Data from parent to child ";
  return (
    <div>
      <h3> Name:{props.loggedInUser}</h3>
      <Home appName="Netflix" user={name} />
      {/* Home is child component of parent component App */}
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <h3>
        You are Welcome {props.user} is {props.appName}
      </h3>
    </div>
  );
}
ReactDOM.render(
  <App loggedInUser="Windows-25" />,
  document.getElementById("container")
);
