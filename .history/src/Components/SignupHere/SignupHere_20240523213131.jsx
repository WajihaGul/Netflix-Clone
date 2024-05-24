import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <div className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}>
          <h1>NETFLIX</h1>
          className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}
          <div className="container-fluid">
            <a className={styles.brand} href="#">
              <span className={styles.navstyle}>NETFLIX</span>
            </a>

            <button className={styles.navbtn} type="submit">
              Sign in
            </button>
          </div>
        </div>
        <div className={styles.SignupTextDiv}>
          <h1 className={styles.SignupText}>
            Unlimited movies, TV shows, and more
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p className={styles.SignupText}>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
        </div>
        <div className={styles.SignupForm}>
          <input type="email" />
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default SignupHere;
