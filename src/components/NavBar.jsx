import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
    </nav>
  );
}

export default Navbar;
