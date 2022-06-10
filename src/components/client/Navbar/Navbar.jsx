import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const getActiveLink = ({ isActive }) =>
  isActive ? styles.authLinkActive : styles.authLink;

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={getActiveLink}>
          Contacts
        </NavLink>
        <div className={styles.entrance}>
          <NavLink to="/login" className={getActiveLink}>
            Login
          </NavLink>
          |
          <NavLink to="/register" className={getActiveLink}>
            Register
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
