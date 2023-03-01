import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (type, value) => {
    // console.log(type, value);
    setLoginData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  return (
    <div>
      <div className="signup-form-group">
        <label htmlFor="email">Email address</label>
        <input
          onChange={(e) => updateLoginData("email", e.target.value)}
          type="email"
          id="email"
          placeholder="example@email.com"
        />
      </div>

      <div className="signup-form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => updateLoginData("password", e.target.value)}
          type="text"
          id="password"
          placeholder="Enter Password"
        />
      </div>
    </div>
  );
};

export default Login;
