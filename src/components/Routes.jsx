import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from 'shared/components/PrivateRoute';
import PublicRoute from 'shared/components/PublicRoute';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ContactsPage from './Pages/ContactsPage';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MyRoutes;
