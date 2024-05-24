import React from "react";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navcontainer} `}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className={styles.navstyle}>NETFLIX</span>
        </a>
        <button className={`btn btn-outline- ${styles.navbtn} `} type="submit">
          Sign in
        </button>
        <div>
          <img
            src="	https://assets.nflxext.com/ffe/siteui/vlv3/a99688c…ignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="signup here"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
