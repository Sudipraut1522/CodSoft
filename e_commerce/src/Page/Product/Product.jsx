import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Product/ProductDetail.css";

const Product = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    if (selectedProduct.length > 0) {
      console.log("Saving to localStorage:", selectedProduct);
      localStorage.setItem("cartProducts", JSON.stringify(selectedProduct));
    }
    const dataFormLocalStorage = localStorage.getItem("cartProducts");
    if (dataFormLocalStorage) {
      setSelectedProduct(JSON.parse(dataFormLocalStorage));
    }
  }, [JSON.stringify(selectedProduct)]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (size && quantity > 0) {
      const newProduct = {
        size,
        quantity: Number(quantity),
        image: category?.image,
        description: category?.description,
        price: Number(category?.price),
        totalPrice: category?.price * quantity,
      };
      const updatedProducts = [...selectedProduct, newProduct];
      setSelectedProduct(updatedProducts);
      setSize("");
      setQuantity(1);
    } else {
      alert("Please select a size and quantity");
    }
  };
  console.log(selectedProduct, "selectedProduct");
  return (
    <div className="productDetail">
      <div className="productdetailheading">
        <h1>Product Detail Page</h1>
      </div>

      <div className="addtoprdouctcart">
        <img src={category?.image} alt="productImage" />
        <div className="productdetail">
          <p className="description">Description: {category?.description}</p>
          <p>Price: {category?.price}</p>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="size" className="size">
                Size
              </label>
              <select
                id="size"
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </p>
            <p className="numberField">
              <label htmlFor="quantity">Quantity: </label>
              <input
                id="quantity"
                required
                type="number"
                max={10}
                min={1}
                className="quantityfield"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </p>
            <div className="addtocartdiv">
              <button className="addtocartbutton" type="submit">
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
