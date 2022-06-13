import { useSelector, shallowEqual } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import styles from './userMenu.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const { name } = useSelector(getUser, shallowEqual);

  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.userMenu}>
      {name}|
      <button type="button" onClick={logOutUser}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
