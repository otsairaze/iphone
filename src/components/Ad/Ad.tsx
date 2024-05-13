import React from "react";
import styles from "./Ad.module.css";
import phone from "../../../public/Ad/phone.png";

const Ad = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h3 className={styles.title}>Аксессуары для Iphone 13 Pro Max</h3>
          <img className={styles.img} src={phone}></img>
        </div>
      </div>
    </div>
  );
};

export default Ad;
