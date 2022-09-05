//HTTP methods
// 1. get()- is used to get the data from the backend//READ
// 2. post()-is used to send the data from the frontend to backend//CREATE
// 3. put()-is used to update the overall existing data//UPDATE
// 4. patch()-is used to update the particular existing data//UPDATE
// 5. delete()-is used to delete an item//DELETE

import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchCRED() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setUser(res.data);
  };
  return (
    <div>
      <table>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>USER NAME</td>
          <td>EMAIL</td>
        </tr>
        {user.map((val, ind) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default FetchCRED;
