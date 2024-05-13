import React from "react";
import styles from "./Header.module.css";
import logo from "../../../public/Header/logo.png";
import like from "../../../public/Header/like.png";
import cart from "../../../public/Header/cart.png";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.block}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.view}>
          <p>Выбрать модель телефона</p>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.count}>
          <span>1</span>
        </div>
        <img src={like} alt="" />
        <img src={cart} alt="" />
      </div>
    </nav>
  );
};

export default Header;
