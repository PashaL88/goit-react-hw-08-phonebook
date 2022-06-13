import useLogin from 'shared/hooks/useLogin';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useLogin();
  if (isLogin) {
    return <Navigate replace to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
