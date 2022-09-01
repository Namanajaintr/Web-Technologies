import React from "react";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <div style={{ justifyContent: "space-evenly", display: "flex" }}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavBarComponent;
