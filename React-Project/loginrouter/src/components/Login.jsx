import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate(); //navigate Hook

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      alert("Enter the data");
    } else {
      console.log(loginData);
    }
  };

  const redirect = () => {
    navigate("/Signup");
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "pink" }} className="mt-3">
        Login Page
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#82C01A" }}
        className="container border mt-3"
      >
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={loginData.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={loginData.password}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <button type="submit" className="btn btn-info" onClick={redirect}>
          Forget Password
        </button>

        <h5 style={{ cursor: "pointer" }} onClick={redirect}>
          Don't have an account? SignUp here!
        </h5>
      </form>
    </div>
  );
};

export default Login;
