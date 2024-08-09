import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    setEmail("");
    setUserName("");
    navigate("/");
  };

  return (
    <>
      <div className="mainContaner">
        <form onSubmit={handleSubmit} className="form">
          <div className="heading">
            <h2>Login Form</h2>
          </div>
          <div className="inputfield">
            <label htmlFor="username">UserName:</label>
            <input
              required
              id="username"
              type="text"
              placeholder="Your Name..."
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
