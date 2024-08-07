import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Home from "../../Page/HomePage/Home";
import About from "../../Page/AboutPage/About";
import Navbar from "../../Component/Navbar/Navbar";
import Login from "../../Page/Login/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Product from "../../Page/Product/Product";
import Cart from "../../Component/Cart/Cart";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="productdetail" element={<Product />} />
          <Route path="carts" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
