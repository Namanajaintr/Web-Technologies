// FUNCTIONAL COMPONENT
// render() is not reqired

function Header(props) {
  return (
    <div>
      <h1>I am header component</h1>
      <img src={props.logo} />
    </div>
  );
}
function Footer(props) {
  let { head, foot } = props; //destructuring

  return (
    <ul>
      <h2>I am footer component</h2>
      <p>I am inside footer</p>
    </ul>
  );
}
function Content({ fname, lname }) {
  // destructuring instead of props
  return (
    <ul>
      <h3>I am content component</h3>
      <p>
        I am inside content{fname}
        {lname}
      </p>
    </ul>
  );
}
ReactDOM.render(
  <li>
    <Header logo="nature.avif" />
    <Footer head="enter" foot="home"></Footer>
    <Content fname="nature" lname="lub"></Content>
  </li>,
  document.getElementById("container")
);
