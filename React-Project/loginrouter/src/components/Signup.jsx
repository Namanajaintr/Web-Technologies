import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    AadarNumber: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate(); //navigate Hook

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      signupData.name === "" ||
      signupData.AadarNumber === "" ||
      signupData.email === "" ||
      signupData.password === ""
    ) {
      alert("Enter the data");
    } else {
      console.log(signupData);
      navigate("/login"); //programatically routing
    }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "pink" }} className="mt-3">
        Signup Page
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#82C09A" }}
        className="container border mt-5"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            onChange={handleChange}
            value={signupData.name} //only name is displayed in log
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Aadar Number:
          </label>
          <input
            type="text"
            name="AadarNumber"
            className="form-control"
            placeholder="Enter Aadar Number"
            onChange={handleChange}
            value={signupData.AadarNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={signupData.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={signupData.password}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Signup;
