import React from "react";
import styles from "./circle.module.css";

export default function Circle({ img, text }) {
  return (
    <div className={styles.circle}>
      <img className={styles.img} src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
}
