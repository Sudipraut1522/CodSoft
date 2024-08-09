import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Home from "../../Page/HomePage/Home";
import About from "../../Page/AboutPage/About";
import Navbar from "../../Component/Navbar/Navbar";
import Login from "../../Page/Login/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Product from "../../Page/Product/Product";
import "../AppRouter/AppRouter.css";
import Cart from "../../Page/CartPage/Cart";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="top">
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="productdetail" element={<Product />} />
          <Route path="cartitem" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
