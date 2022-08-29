class ConditionRender extends React.Component {
  state = {
    adminName: "Namana",
    user: "Avi",
    isAdmin: true,
  };
  changeView() {
    if (this.state.isAdmin) {
      this.setState({
        isAdmin: false,
      });
    } else {
      this.setState({
        isAdmin: true,
      });
    }
  }
  render() {
    let { adminName, user, isAdmin } = this.state;
    let renderedData = null;
    if (isAdmin) {
      renderedData = (
        <div>
          <h1>Hello admin {adminName}</h1>
          <h2>Welcome to Jio Home </h2>
          <h2> Add New or Modify products</h2>
        </div>
      );
    } else {
      renderedData = (
        <div>
          <h1>Hello user {user}</h1>
          <h2>Welcome to Jio Home </h2>
          <h2>View and Buy Avail products</h2>
        </div>
      );
    }
    return (
      <div>
        {renderedData}

        <button
          onClick={() => {
            this.changeView();
          }}
        >
          {isAdmin ? "see user view" : "see admin view"}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<ConditionRender />, document.getElementById("container"));
