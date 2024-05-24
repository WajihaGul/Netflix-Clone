import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <div>
          <h1>NETFLIX</h1>
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
