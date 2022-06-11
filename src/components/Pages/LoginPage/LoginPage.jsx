import LoginForm from 'components/client/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { isLoginUser } from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector(isLoginUser, shallowEqual);

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
  }, [isLogin, navigate]);

  const loginUser = data => {
    dispatch(login(data));
  };
  return (
    <div>
      <h2>Login page</h2>
      <LoginForm onSubmit={loginUser} />
    </div>
  );
};

export default LoginPage;
