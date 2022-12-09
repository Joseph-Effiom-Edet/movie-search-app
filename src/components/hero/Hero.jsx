import React from "react";
import Rectangle from "../../assets/Rectangle.png";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <img src={Rectangle} alt="" />

        <h1>
          Watch <br className="first-br" />
          something
          <br />
          incredible
        </h1>
      </div>
    </div>
  );
}

export default Hero;
