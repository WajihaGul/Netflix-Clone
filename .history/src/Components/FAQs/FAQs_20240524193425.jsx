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
                  height: "75px",
                  fontSize: "x-large",
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
                }}
              >
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want without a single commercial
                – all for one low monthly price. There's always something new to
                discover and new TV shows and movies are added every week!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                How much does Netflix cost?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                Where can I watch?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body "
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favorite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </div>
            </div>
          </div>
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
                }}
              >
                How do I cancel?
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
                }}
              >
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                What can I watch on Netflix?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                Is Netflix good for kids?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: "rgb(55, 55, 55)",
                  color: "white",
                }}
              >
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </div>
            </div>
          </div>
        </div>
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
            <button className={styles.SignUpBtn}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQs;
