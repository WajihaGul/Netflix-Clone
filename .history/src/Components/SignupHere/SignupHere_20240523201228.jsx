import styles from "./SignupHere.module.css";

const SignupHere = () => {
  return (
    <>
      <div>
        className=
        {`navbar navbar-expand-lg bg-body-tertiary ${styles.navcontainer} `}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className={styles.navstyle}>NETFLIX</span>
          </a>
          <button
            className={`btn btn-outline- ${styles.navbtn} `}
            type="submit"
          >
            Sign in
          </button>
        </div>
        <img
          className={styles.SignUpContainer}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default SignupHere;
