import { useSelector, shallowEqual } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { name } = useSelector(getUser, shallowEqual);

  return (
    <div>
      {name}|<button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
