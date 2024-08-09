import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import Search from "../Search/Search";

import { Link } from "react-router-dom";
import Sidenav from "./SideNavbar";

const Navbar = () => {
  const [notifaction, setNotifaction] = useState(0);
  const [user, setUserName] = useState("");

  const userFristLetter = user[0]?.toLocaleUpperCase();
  console.log(userFristLetter);

  useEffect(() => {
    const username = localStorage.getItem("username");
    setUserName(username);
  }, [user]);
  return (
    <>
      <nav className="mainNav">
        <div className="nav1">
          <Link to="/">
            <h3>RAW</h3>
          </Link>
        </div>
        <div className="nav2">
          <div>
            <Search />
          </div>
          <div>
            <Link to="cartItem">
              {" "}
              <div>{`Cart `} </div>
              {notifaction}
            </Link>
          </div>
          <div>
            <Link to="login">
              {user ? (
                <div className="userName">{userFristLetter}</div>
              ) : (
                "Login"
              )}
            </Link>
          </div>
        </div>
        <Sidenav />
      </nav>
    </>
  );
};

export default Navbar;
