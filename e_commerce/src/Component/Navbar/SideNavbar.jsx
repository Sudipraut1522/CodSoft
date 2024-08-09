import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/SideNavbar.css";
import { BiCross } from "react-icons/bi";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const handelLogout = () => {
    localStorage.removeItem("username");
  };

  return (
    <div>
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <span className="closebtn" onClick={closeNav}>
          <BiCross height={40} width={40} />
        </span>
        <Link to="/">Home</Link>
        <Link to="about">Services</Link>
        <Link to="/">Home</Link>
        <Link to="about">Services</Link>
        <button className="Logout" id="Logout" onClick={handelLogout}>
          Logout
        </button>
      </div>
      <span className="openBtn" onClick={toggleNav}>
        &#9776;
      </span>
    </div>
  );
};

export default Sidenav;
