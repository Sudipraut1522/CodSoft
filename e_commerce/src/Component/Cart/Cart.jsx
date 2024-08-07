import React, { useEffect } from "react";
import "../Cart/Cart.css";
import { useLocation } from "react-router-dom";

const Cart = () => {
  // const location = useLocation();
  // const category = location.state?.selectedProduct;
  // console.log(location);

  // useEffect(() => {
  //   const savedProducts =
  //     JSON.parse(localStorage.getItem("cartProducts")) || [];
  //   setSelectedProduct(savedProducts);
  // }, []);
  return (
    <div>
      <span className="cart">
        <h3>Cart</h3> <span className="number">0</span>
      </span>
    </div>
  );
};

export default Cart;
