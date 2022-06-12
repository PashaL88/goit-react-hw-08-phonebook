import { useSelector, shallowEqual } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import styles from './userMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser, shallowEqual);

  return (
    <div className={styles.userMenu}>
      {name}|<button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
