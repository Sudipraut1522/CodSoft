import React from "react";
import "../HomePage/Home.css";
import { Link } from "react-router-dom";
import Card from "../../Component/Card/Card";
import Instagram from "../../Component/Instagram/Instagram";

const Home = () => {
  return (
    <div>
      <div className="hpmediv">
        <div className="HomePage">
          <div className="image">
            <img
              src="./a.webp"
              alt="home image"
              className="images"
              width={700}
              height={700}
            />
            <div className="relative">
              ALWAYS BE
              <h1>ORIGINAL</h1>
              <p>NEW ARRIVALS ARE HERE</p>
              <Link>
                <p>SHOP NOW</p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
      <div className="instagramcomponent">
        <Instagram />
      </div>
    </div>
  );
};

export default Home;
