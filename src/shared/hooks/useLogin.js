import { useSelector, shallowEqual } from 'react-redux';
import { isLoginUser } from 'redux/auth/auth-selectors';

const useLogin = () => {
  const isLogin = useSelector(isLoginUser, shallowEqual);
  return isLogin;
};

export default useLogin;
