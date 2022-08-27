// CLASS COMPONENT

// JSX RULES
// render() is mandatory
// To create a component you should follow the Pascal case
// If we have more than 2 elements or 2 set of elements wrap it inside a paranthesis and a parent element
class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>
            i am the first set of element qwertyuiopasdfghjklzxcvbnm1234567890
          </p>
          <h1>
            class keyword header component extends react component and render
            method returns the jsx component , as Header is a react component
            wrap it inside ang braces
          </h1>
        </div>
        <div>i am the second set of element</div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <h3>
        hello i am content page {this.props.pagedetails}
        {this.props.address}
      </h3>
    );
  }
}

class Footer extends React.Component {
  render() {
    console.log(this.props.fn);
    console.log(this.props.ln);
    return (
      <div>
        <h1>footer</h1>
        <p>
          footer p page {this.props.fn}
          {this.props.ln}
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <li>
    <Footer fn="namana" ln="jain"></Footer>
    <Header />
    <Content
      pagedetails="post has been delivered to"
      address="Tumkur"
    ></Content>
  </li>,
  document.getElementById("container")
);
