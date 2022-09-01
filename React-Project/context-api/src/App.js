import { useState } from "react";
import { DataProvider } from "./components/ContextApiData";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/ContextApiUser";

function App() {
  let fName = "Ghana";
  const [data, setData] = useState("plant");
  return (
    <div>
      <h1>{data}</h1>
      <DataProvider value={fName}>
        <ComponentA />
      </DataProvider>

      <UserProvider value={setData}>
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
