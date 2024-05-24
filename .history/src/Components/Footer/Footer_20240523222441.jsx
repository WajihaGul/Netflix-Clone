import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Questions? Contact us </p>
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              dropdown
              <li>Netflix Pakistan</li>
            </ul>
          </div>

          <div className="col-lg-12">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div className="col-lg-12 ">
            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>

          <div className="col-lg-12 ">
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
