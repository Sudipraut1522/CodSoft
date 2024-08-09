import React, { useEffect, useState } from "react";
import "../CartPage/Cart.css";
import Footer from "../../Component/Footer/Footer";

const Cart = () => {
  const [products, setProducts] = useState([]);
  console.log("Product Quantity", products);

  useEffect(() => {
    const item = localStorage.getItem("cartProducts");
    if (item) {
      setProducts(JSON.parse(item));
    }
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem("cartProducts");
    setProducts([]);
  };

  const handleQuantityChange = (index, change) => {
    const updatedProducts = [...products];
    const newQuantity = updatedProducts[index].quantity + change;
    if (newQuantity >= 0) {
      updatedProducts[index].quantity = newQuantity;
      setProducts(updatedProducts);
      localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <>
      <div className="cartItem">
        <div>
          <p>My Cart</p>
          <hr />
          <div className="scrollable-both">
            {products.length > 0 ? (
              products.map((item, index) => (
                <div className="cartDiv" key={index}>
                  <hr />
                  <div className="imageDiv">
                    <img src={item.image} alt={item.description} />
                    <div>
                      <p className="productdescription">{item.description}</p>
                      <p>Price: {item.price}</p>
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="incrementBtn">
                    <button onClick={() => handleQuantityChange(index, -1)}>
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityChange(index, 1)}>
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      className="dltButton"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <div className="cartyEmpty">
                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        </div>
        <div className="orderDIv">
          <div className="orderSummery">
            <p>Order Summary</p>
            <hr />
            <hr />
            <div className="subtotal">
              <p>Subtotal</p>
              <p>Rs: {subtotal}</p>
            </div>
            <hr />
            <div className="total">
              <p>Total</p>
              <p>Rs: {total}</p>
            </div>
            <div className="ClearCart">
              <button onClick={handleClearCart}>Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
