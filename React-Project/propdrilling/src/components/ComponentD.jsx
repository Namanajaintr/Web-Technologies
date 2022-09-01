import React, { useState } from "react";

function ComponentD(props) {
  let onChng = () => {
    props.setData("Manish");
  };
  return (
    <div>
      <div>ComponentD</div>
      <h5>
        {props.username}
        {props.data}
      </h5>
      <button onClick={onChng}>Change of name</button>
    </div>
  );
}

export default ComponentD;
