import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signup = async body => {
  const { data } = await instance.post('/users/signup', body);
  addToken(data.token);
  return data;
};

export const login = async body => {
  const { data } = await instance.post('/users/login', body);
  addToken(data.token);
  return data;
};

export default instance;
