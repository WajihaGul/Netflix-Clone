import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      {/* <nav
        className={
          "navbar navbar-expand-lg bg-body-tertiary ${styles.customNavbar}"
        } */}
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${styles.customNavbar}`}
      >
        <div class="container-fluid">
          <a className="navbar-brand" href="#">
            NETFLIX
          </a>

          <button class="btn btn-outline-success" type="submit">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
