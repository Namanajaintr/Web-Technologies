// Acheiving the life cycle states in FC using useEffect Hook
import React, { useEffect, useState } from "react";

const RightUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect executed in  mounting Phase");
    return () => {
      console.log("component will unmount phase"); //return inside useeffect will takes to unmount phase
    };
  }, []); //takes callback and an empty original array in mounting phase

  useEffect(() => {
    if (count !== 0) {
      console.log("Useeffect ComponentDidUpdate executed");
    }
  }, [count]); //if you have dependencis array in your useeffect in updating phase

  return (
    <div>
      <h1>RightUseEffect</h1>
      <h2>count={count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
};

export default RightUseEffect;
