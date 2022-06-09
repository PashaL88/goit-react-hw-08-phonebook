import styles from './navbar.module.css';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <button>Login</button>|<button>Register</button>
      </nav>
    </>
  );
};

export default Navbar;
