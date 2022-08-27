// Even though the execution flow is unidirectional from p-c we can acheive bidirectional from c-p by using callbacks

class Parent extends React.Component {
  state = {
    str1: "No lets be in home",
  };

  getDataFromChild = (childData) => {
    //have a callback in parent and send that to child
    console.log(childData);
    this.setState({
      str1: "please come lets go okay",
    });
  };

  render() {
    return (
      <div>
        <h1>This ia a parent component</h1>
        <h1>{this.state.str1}</h1>
        <Child parentdatacallback={this.getDataFromChild.bind(this)} />
      </div>
    );
  }
}
class Child extends React.Component {
  render() {
    const str = "hey come lets go out";
    return (
      <div>
        <h1>This ia a child component</h1>
        <h1>{str}</h1>
        <button
          onClick={() => {
            this.props.parentdatacallback(str);
          }}
        >
          send data from child to parent
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Parent />, document.getElementById("container"));
