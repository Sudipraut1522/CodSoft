import React from "react";
import "../Instagram/Instagram.css";

const Instagram = () => {
  return (
    <div className="instagrampage">
      <div className="instagramHeading">
        <h1># INSTAGRAM</h1>
      </div>
      <div className="instagramdiv">
        <img
          src="./instagram.png"
          alt="instagram image"
          className="istagramImage"
          height={600}
        />
      </div>
    </div>
  );
};

export default Instagram;
