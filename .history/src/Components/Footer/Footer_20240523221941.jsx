import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <ul>
              <li>Questions? Contact us </li>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              dropdown
              <li>Netflix Pakistan</li>
            </ul>
          </div>
          <h2>Questions? Contact us </h2>
          <div className="col-lg-12 text-center">
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              dropdown
              <li>Netflix Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
