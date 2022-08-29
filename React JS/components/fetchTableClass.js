class Fetch extends React.Component {
  state = {
    data: [],
  };
  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        return res.json(); //returns in an array
      })
      .then((postdata) => {
        this.setState({ data: postdata });
        console.log(postdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.fetchPosts();
          }}
        >
          click me
        </button>
        {this.state.data.map((users, index, arr) => {
          return (
            <table
              style={{
                border: "2px solid black",
                width: "100%",
                backgroundColor: "orange",
                borderCollapse: "collapse",
              }}
            >
              <tr>
                <td>{users.id}</td>
              </tr>
              <tr>
                <td>{users.name}</td>
              </tr>
              <tr>
                <td>{users.username}</td>
              </tr>
              <tr>
                <td>{users.email}</td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}
ReactDOM.render(<Fetch />, document.getElementById("container"));
