class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Data from parent",
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Child dataParentToChild={data} />
      </div>
    );
  }
}

<div>===========================</div>;

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataParentToChild,
    };
  }

  render() {
    const { data } = this.state;
    return <div>{data}</div>;
  }
}

ReactDOM.render(<Parent />, document.getElementById("container"));
