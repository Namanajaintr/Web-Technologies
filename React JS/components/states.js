class Greet extends React.Component {
  state = {
    fn: "Prety",
    age: 44,
  };
  changeName = () => {
    //states are mutable
    console.log("before setState:", this.state.fn, this.state.age); //pretty
    this.setState({ fn: "summy", age: 55 }, () => {
      console.log("after setState:", this.state.fn, this.state.age); //summy
    }); //if not put in function setstate is not updated
  };
  changeProp = () => {
    this.props.lname = "Ramana"; //props are immutatble
  };

  render() {
    return (
      <div>
        <h1>This is Class component with State object</h1>
        <h2>
          hai{this.state.fn},ur age is{this.state.age}
        </h2>

        <button
          onClick={() => {
            this.changeName();
          }}
        >
          click to change Name using state
        </button>
        <button
          onClick={() => {
            this.changeProp();
          }}
        >
          click to change Name using prop
          {/* <button
            onClick={() => {
              this.changeName();
            }}
          >
            click to change Name using prop
           </button> //button inside a button */}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Greet lname="Namana" />, document.getElementById("container"));
