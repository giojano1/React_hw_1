import React from "react";
import earthImg from "/assets/earth.png";
import style from "./header.module.scss";
const Header = () => {
  return (
    <header>
      <div className={style.header_content}>
        <img src={earthImg} alt="" />
        <span>my travel journal.</span>
      </div>
    </header>
  );
};

export default Header;
