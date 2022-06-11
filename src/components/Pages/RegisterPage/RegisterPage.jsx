import RegisterForm from 'components/client/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import { isLoginUser } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useSelector(isLoginUser, shallowEqual);

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
