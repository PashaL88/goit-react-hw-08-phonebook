import RegisterForm from 'components/client/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import useLogin from 'shared/hooks/useLogin';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
  }, [isLogin, navigate]);

  const register = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Register page</h2>
      <RegisterForm onSubmit={register} />
    </div>
  );
};

export default RegisterPage;
