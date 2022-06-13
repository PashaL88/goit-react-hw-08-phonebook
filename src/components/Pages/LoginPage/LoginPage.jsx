import LoginForm from 'components/client/LoginForm';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

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
