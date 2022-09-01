import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(props) {
  return (
    <div>
      componentA property {props.username}
      <ComponentB
        username={props.username}
        data={props.data}
        setData={props.setData}
      />
      ;
    </div>
  );
}

export default ComponentA;
