import logo from "./logo.svg";
import "./App.css";
import WrongUseEffect from "./components/WrongUseEffect";
import RightUseEffect from "./components/RightUseEffect";

function App() {
  return (
    <div className="App">
      <RightUseEffect />
      <WrongUseEffect />
    </div>
  );
}

export default App;
