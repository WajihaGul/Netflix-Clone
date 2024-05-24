import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
