import React, { useState } from "react";

const PersonDetail = () => {
  const [person, setPerson] = useState({
    userName: "Hi guychhh I am Here",
    age: 30,
  });
  return (
    <div>
      <h2>
        PersonDetail
        <br></br>
        {person.userName}
      </h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFT9tSPnsVBg77Ugjd8lhLmP7KvbgyQ9VYw&usqp=CAU"></img>
    </div>
  );
};

export default PersonDetail;
