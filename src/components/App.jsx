import Navbar from './client/Navbar';
import Routes from './Routes';
import styles from './app.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
