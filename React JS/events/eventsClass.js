class Welcome extends React.Component {
  render() {
    console.log(this.props);
    let fn = "Avi";
    return (
      <div>
        <h1>
          WELCOME {fn} and {this.props.ln}
        </h1>
        <button onClick={this.myFunction}>myFunction</button>
        <button onClick={this.greet.bind(this)}>greet</button>
        <button
          onClick={() => {
            this.getName;
          }}
        >
          getName
        </button>
      </div>
    );
  }

  myFunction() {
    console.log("my Function executed");
    console.log(this); // this refers to object - undefined
  }
  greet() {
    console.log("greet executed");
    console.log(this); // this refers to class - Welcome
  }
  getName() {
    console.log(" getName executed");
    console.log(this.props.children); // this refers to particular function
  }
}
ReactDOM.render(
  <Welcome ln="Ram">HELLO</Welcome>, //<h1>hello<h1/> refers to children of Welcome component
  document.getElementById("container")
);
