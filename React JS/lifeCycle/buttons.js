class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Karnataka",
      age: "50",
    };
  }

  render() {
    return (
      <div>
        <h1>
          state:{this.state.name}
          <br></br>
          code:{this.state.age}
        </h1>

        <button
          onClick={() => {
            this.updatename("To Goa");
          }}
        >
          click to chng Name
        </button>
        <button
          onClick={() => {
            this.updatecode(100);
          }}
        >
          click to chng Code
        </button>
      </div>
    );
  }
  updatename(newname) {
    this.setState({
      name: newname,
    });
  }
  updatecode(newage) {
    this.setState({
      age: newage,
    });
  }
}
ReactDOM.render(<Parent />, document.getElementById("container"));
