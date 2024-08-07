import React from "react";
import { BiLogIn } from "react-icons/bi";
import "../Login/login.css";

const Login = () => {
  return (
    <div>
      <span className="login">
        <BiLogIn height={40} width={40} />
        <p className="p">Login</p>
      </span>
    </div>
  );
};

export default Login;
