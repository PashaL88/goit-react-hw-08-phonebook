import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async body => {
  const { data } = await instance.post('/users/signup', body);
  // const { data } = await axios.post('/users/signup', body);
  addToken(data.token);
  return data;
};

export const login = async body => {
  const { data } = await instance.post('/users/login', body);
  // const { data } = await axios.post('/users/login', body);
  addToken(data.token);
  return data;
};

export const getCurrent = async token => {
  addToken(token);
  try {
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export default instance;
