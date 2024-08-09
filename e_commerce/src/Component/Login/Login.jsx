import React from "react";
import { BiLogIn } from "react-icons/bi";
import "../Login/login.css";

const Login = () => {
  const userName = localStorage.getItem("username");
  console.log("username", userName);
  return (
    <div>
      <span className="login">
        {userName ? <p className="p">Login</p> : ""}
      </span>
    </div>
  );
};

export default Login;
