import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import { useState } from "react";

function App() {
  let username = "Namana";

  const [data, setData] = useState("Megha");

  return (
    <div>
      Parent Component App
      <h1>{data}</h1>
      <ComponentA username={username} data={data} setData={setData} />
    </div>
  );
}

export default App;
