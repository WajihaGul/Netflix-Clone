import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <div className={styles.imgContainer}>
      {/* Background image layer */}
      <div className={`expand-lg bg-body-tertiary ${styles.navcontainer}`}>
        {/* Navbar container */}
        <div className="container-fluid">
          <a className={styles.brand} href="#">
            {/* Navbar brand */}
            <span className={styles.navstyle}>NETFLIX</span>
          </a>
          <button className={styles.navbtn} type="submit">
            {/* Sign in button */}
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupHere;
