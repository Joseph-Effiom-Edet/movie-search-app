import React from "react";
import "./navBar.scss";
import Test from "../../assets/MyTestApp.png";
function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <img src={Test} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
