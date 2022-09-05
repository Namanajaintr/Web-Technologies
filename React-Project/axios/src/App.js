import logo from "./logo.svg";
import "./App.css";

import FetchPosts from "./axios/Fetch";
import FetchCRUD from "./axios/FetchCRUD";
import FetchProduct from "./components/AddProducts";

function App() {
  return (
    <div className="App">
      {/* <FetchPosts /> */}
      <FetchCRUD />
      {/* <FetchProduct /> */}
    </div>
  );
}

export default App;
