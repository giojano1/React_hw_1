import React from "react";
import earthImg from "/assets/earth.png";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="header_content">
        <img src={earthImg} alt="" />
        <span>my travel journal.</span>
      </div>
    </header>
  );
};

export default Header;
