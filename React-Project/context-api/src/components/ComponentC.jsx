import React, { useContext } from "react";
import ContextData from "./ContextApiData";
import ContextUser from "./ContextApiUser";

const ComponentC = () => {
  const dataContext = useContext(ContextData);
  const userContext = useContext(ContextUser);
  function changeData() {
    userContext("Tree");
  }
  return (
    <div>
      componentC
      <h3>This fName is from App component to C component is {dataContext}</h3>
      <button onClick={changeData}>click</button>
    </div>
  );
};

export default ComponentC;
