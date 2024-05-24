import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.background - color}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
