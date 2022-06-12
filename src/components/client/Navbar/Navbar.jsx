import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import AuthMenu from './authMenu';
import UserMenu from './userMenu/UserMenu';
import { useSelector, shallowEqual } from 'react-redux';
import { isLoginUser } from 'redux/auth/auth-selectors';

const getActiveLink = ({ isActive }) =>
  isActive ? styles.authLinkActive : styles.authLink;

const Navbar = () => {
  const isLogin = useSelector(isLoginUser, shallowEqual);
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={getActiveLink}>
          Contacts
        </NavLink>
        {/* {isLogin && <UserMenu />} */}
        {!isLogin && <AuthMenu />}
      </nav>
    </>
  );
};

export default Navbar;
