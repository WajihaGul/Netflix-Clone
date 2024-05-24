import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <div className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}>
          <h1>NETFLIX</h1>
          className={`expand-lg bg-body-tertiary ${styles.navcontainer} `}
          <div className="container-fluid">
            <a className="brand" href="#">
              <span className={styles.navstyle}>NETFLIX</span>
            </a>
          </div>
          <button
            className={`btn btn-outline- ${styles.navbtn} `}
            type="submit"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupHere;
