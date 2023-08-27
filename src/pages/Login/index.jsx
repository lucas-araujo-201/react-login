import "./style.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/auth";

export const Login = () => {
  const { authenticated, signin } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add your authentication logic.
    // You might want to make an API call to a backend service to verify the credentials.
    //console.log("Login clicked");
    //console.log("Login:", login);
    //console.log("Password:", password);

    signin(login, password);

  };

  return (
    <div className="App">
      <div className="login-container">
        <p>{String(authenticated)}</p>
        <h1>Login</h1>
        <div className="input-container">
          <label>Login</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
