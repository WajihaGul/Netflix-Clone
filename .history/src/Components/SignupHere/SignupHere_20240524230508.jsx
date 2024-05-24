import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.navdiv}>
          <div className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}>
            <h1 className={styles.signuphead1}>NETFLIX</h1>
            className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}
            <div className="container-fluid">
              <a className={styles.brand} href="#">
                <span className={styles.navstyle}>NETFLIX</span>
              </a>
            </div>
            <button className={styles.navbtn} type="submit">
              Sign in
            </button>
          </div>
          <div className={styles.SignupTextDiv}>
            <h1 className={styles.SignupText}>
              Unlimited movies, TV shows, and more
            </h1>
            <p className={styles.SignupText}>Watch anywhere. Cancel anytime.</p>
            <p className={styles.SignupText}>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div>
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
      </div>
    </>
  );
};

export default SignupHere;
