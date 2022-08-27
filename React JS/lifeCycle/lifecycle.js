// 1. MOUNTING PHASE - Executes only once
// 1.1 componentDidMount() - executes all methods for the first tym mounting to real dom
// used to make side effects to the component
// you can make payment gateways, API calls, subscribing, unscribing  in this method
// 1.2 constructor()
// 1.3 getDerivedStateFromProps()
// 1.4 render()

class Parent extends React.Component {
  componentDidMount() {
    console.log("Parent componentDidMount executed");
  }

  constructor() {
    super();
    this.state = {
      text: "Mounting Phase",
      show: true,
    };
    console.log("Parent constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    // it returns the state or if there no change in the state then returns null
    console.log("Parent getDerivedStateFromProps executed");
    return state;
  }

  render() {
    // In render method we should update anything
    // we should not perform any side effects
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
    return <div>Child Component</div>;
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount executed");
  }
}

ReactDOM.render(
  <Parent data="Welcome" />,
  document.getElementById("container")
);
