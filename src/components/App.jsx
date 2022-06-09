import Navbar from './client/Navbar';
import Routes from './Routes';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
