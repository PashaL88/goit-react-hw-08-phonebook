import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import AuthMenu from './authMenu';
import UserMenu from './userMenu/UserMenu';
import useLogin from 'shared/hooks/useLogin';

const getActiveLink = ({ isActive }) =>
  isActive ? styles.authLinkActive : styles.authLink;

const Navbar = () => {
  const isLogin = useLogin();
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>

        {isLogin && (
          <NavLink to="/contacts" className={getActiveLink}>
            Contacts
          </NavLink>
        )}
        {isLogin && <UserMenu />}
        {!isLogin && <AuthMenu />}
      </nav>
    </>
  );
};

export default Navbar;
