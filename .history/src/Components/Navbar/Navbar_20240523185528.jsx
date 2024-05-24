import React from "react";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className={styles.navstyle}>NETFLIX</span>
        </a>
        <button className={`btn btn-outline- ${styles.navbtn} `} type="submit">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
