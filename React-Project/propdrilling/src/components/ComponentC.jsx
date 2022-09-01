import React from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  return (
    <div>
      ComponentC
      <ComponentD
        username={props.username}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
}

export default ComponentC;
