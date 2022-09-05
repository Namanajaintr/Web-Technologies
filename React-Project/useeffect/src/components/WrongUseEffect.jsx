import React, { useState } from "react";

const WrongUseEffect = () => {
  const [count, setCount] = useState(0);
  useState(() => {
    console.log("use effect executed");
  }); //this is wrong

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>WrongUseEffect</h1>
      <h2>count={count}</h2>
      <button onClick={increment}>click</button>
    </div>
  );
};

export default WrongUseEffect;
