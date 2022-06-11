import styles from './loginForm.module.css';
import { useState } from 'react';
import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevFrom => ({ ...prevFrom, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Email:</label>
      <input
        value={email}
        onChange={handleChange}
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <label htmlFor="">Password:</label>
      <input
        value={password}
        onChange={handleChange}
        className={styles.input}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
