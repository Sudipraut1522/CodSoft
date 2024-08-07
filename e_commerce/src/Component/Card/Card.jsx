import React from "react";
import "../Card/Card.css";
import { useNavigate } from "react-router-dom";
import { data } from "../../Dummy data/Data";

const Card = () => {
  const Router = useNavigate();

  const handleCart = (items) => {
    if (localStorage.getItem("username")) {
      Router("/productDetail", { state: { category: items } });
    } else {
      Router("/about");
      Router("/productDetail", { state: { category: items } });
    }
  };
  return (
    <div className="maincard">
      <div className="HEADING">
        <h1>LIMATED EDITION COLLECTION</h1>
      </div>

      <div className="product">
        {data?.map((item, i) => (
          <div className="cards" key={i}>
            <img
              src={item.image}
              alt="Product Image"
              height={200}
              width={200}
            />
            <div>
              <p>I am a Product</p>
              <p>{item?.price}</p>
              <div className="addbutton">
                <button onClick={() => handleCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
