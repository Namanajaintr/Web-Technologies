class Fetch extends React.Component {
  state = {
    data: [],
  };
  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
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
        {this.state.data.map((posts, index, arr) => {
          return <li>{posts.title}</li>;
        })}
      </div>
    );
  }
}
ReactDOM.render(<Fetch />, document.getElementById("container"));
