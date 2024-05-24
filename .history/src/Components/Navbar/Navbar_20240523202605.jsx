import React from "react";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  return (
    <div className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}>
      <h1>NETFLIX</h1>
      className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}
      <div className="container-fluid">
        <a className="brand" href="#">
          <span className={styles.navstyle}>NETFLIX</span>
        </a>

        <button className={`btn btn-outline- ${styles.navbtn} `} type="submit">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
