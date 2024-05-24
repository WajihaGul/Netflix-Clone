import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import React from "react";
import styles from "./FAQs.module.css";

const FAQs = () => {
  return (
    <>
      <div className={styles.parentdiv}>
        <h1 className={styles.faqh1}>Frequently Asked Questions</h1>
        <div
          className={`accordion accordion-flush id="accordionFlushExample"  ${styles.container}`}
        >
          {/* Accordion Items */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                  border: "none",
                }}
              >
                What is Netflix
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                  border: "none",
                }}
              >
                {/* Accordion Body Content */}
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other accordion items */}
        </div>
        {/* Signup Section */}
        <div>
          <p className={styles.SignupText}>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div className={styles.signupwithbtn}>
            <input
              className={styles.SignupForm}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button className={styles.SignUpBtn} style={{ color: "white" }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
