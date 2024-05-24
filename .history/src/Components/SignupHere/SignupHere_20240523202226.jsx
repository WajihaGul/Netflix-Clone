import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        {/* <div>
          <h1>NETFLIX</h1>
          
        </div> */}
        <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navcontainer} `}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className={styles.navstyle}>NETFLIX</span>
        </a>
        <button className={`btn btn-outline- ${styles.navbtn} `} type="submit">
          Sign in
        </button>
      </div>
      </div>
    </>
  );
};

export default SignupHere;
