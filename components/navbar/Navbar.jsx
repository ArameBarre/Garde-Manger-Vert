import React from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titre}>MON GARDE-MANGER VERT</div>
      <img className={styles.logo} src="/MGVpetit.jpg" alt="Logo" />
      <div>
        <Links />{" "}
      </div>
    </div>
  );
};

export default Navbar;
