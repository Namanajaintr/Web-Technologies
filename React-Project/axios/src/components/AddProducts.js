import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchProduct() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://ty-shop.herokuapp.com/api/products");
    console.log(res);
    console.log(user);
    console.log(res.data.products);
    setUser(res.data.products);
  };
  return (
    <div>
      {user.map((val, ind) => {
        return (
          <div>
            <p>{val.productName}</p>
            <p>{val.productDescription}</p>;
          </div>
        );
      })}
    </div>
  );
}
export default FetchProduct;
