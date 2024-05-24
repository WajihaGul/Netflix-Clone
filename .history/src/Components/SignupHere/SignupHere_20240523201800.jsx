import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <button className={`btn btn-outline- ${styles.navbtn} `} type="submit">
          Sign in
        </button>
      </div>
    </>
  );
};

export default SignupHere;
