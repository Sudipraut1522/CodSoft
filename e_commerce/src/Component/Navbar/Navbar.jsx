import React from "react";
import "../Navbar/Navbar.css";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  return (
    <nav className="mainNav">
      <div className="nav1">
        <Link onClick={() => window.location.reload()}>
          <h3>RAW</h3>
        </Link>
      </div>
      <div className="nav2">
        <Search />
        <Cart />
        <Link to="login">Login</Link>
        <SideNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
