// 1. MOUNTING PHASE - Executes only once
// 1.1 componentDidMount()
// 1.2 constructor()
// 1.3 getDerivedStateFromProps()
// 1.4 render()

class Parent extends React.Component {
  componentDidMount() {
    // executes all methods for the first tym mounting to real dom
    // whenever there is error all methods executes except componentDidMount()
    // So used to make side effects to the component on successful exection without any errors
    // So you can make business logic, payment gateways, API calls, subscribing, unscribing  in this method
    console.log("Parent componentDidMount executed");
  }

  constructor() {
    // executes frst in react , initialization and binding of states
    super();
    this.state = {
      text: "Mounting Phase",
      show: true,
    };
    console.log("Parent constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    // it returns the newstate or null when there change in the state
    console.log("Parent getDerivedStateFromProps executed");
    return state;
  }

  render() {
    // renders the data to Real DOM
    // In render method we should update anything
    // we should not perform any side effects or business logics
    // If tries to update it goes to infinite loop
    console.log("Parent render executed");
    return (
      <div>
        {this.props.data}
        <h1>{this.state.text}</h1>
        <button
          onClick={() => {
            this.updateText("Updating Phase");
          }}
        >
          click me
        </button>
        {this.state.show ? <Child /> : null}
      </div>
    );
  }

  // 2. UPDATING PHASE - Executes n times whenever props or state chng occurs
  // 2.1 shouldComponentUpdate() - returns Boolean - if true it rerenders(again render()executes) or if false no further methods are executed
  // 2.2 getSnapshotBeforeUpdate() - takes prevProp, prevState - returns string
  // 2.3 componentDidUpdate() - takes prevProp, prevState, snapshot - returns

  updateText(text) {
    this.setState({
      text: text,
      show: false,
    });
  }

  shouldComponentUpdate() {
    console.log("Parent shouldComponentUpdate executed");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Parent  getSnapshotBeforeUpdate executed");
    return "qwerty Keyboard snapshot";
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("Parent componentDidUpdate executed");
    console.log("prevProp executed:", prevProp);
    console.log("prevState executed:", prevState);
    console.log("Psnapshot executed:", snapshot);
  }
}

// 3. UNMOUNTING PHASE - When component comes out of Real DOM this unmount() executes
// 3.1 componentWillUnmount()

class Child extends React.Component {
  render() {
    return <div>Child Component Unmountes</div>;
  }
  componentWillUnmount() {
    alert("The component is about to be unmounted.");
    console.log("child componentWillUnmount executed");
  }
}

ReactDOM.render(
  <Parent data="Welcome" />,
  document.getElementById("container")
);
