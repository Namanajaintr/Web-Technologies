function Style() {
  const myStyle = { backgroundColor: "green" };
  return (
    <div>
      <div>
        <h1
          style={{ backgroundColor: "pink", color: "blue", fontSize: "20px" }}
        >
          Styling to you using Inline css
        </h1>
        <h2 style={myStyle}>Styling to you using Internal css</h2>
      </div>

      <div className="main">
        Styling to you using External css
        <div className="d1"></div>
        <div className="d2"></div>
      </div>

      <div className="main0">
        <div className="main1">
          <div className="d11"></div>
          <div className="d22"></div>
        </div>
        <div className="main2">
          <div className="d33"></div>
          <div className="d44"></div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Style />, document.getElementById("container"));
