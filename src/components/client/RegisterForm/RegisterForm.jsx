import styles from './registerForm.module.css';
import { useState } from 'react';
import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
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

  const { name, email, password } = form;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input
        value={name}
        onChange={handleChange}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
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
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
