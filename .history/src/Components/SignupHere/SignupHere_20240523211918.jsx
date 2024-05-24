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
      </div>
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
      </div>
    </>
  );
};

export default SignupHere;
