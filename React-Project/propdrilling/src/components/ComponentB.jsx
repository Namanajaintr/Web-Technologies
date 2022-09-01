import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div>
      ComponentB
      <ComponentC
        username={props.username}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
}

export default ComponentB;
