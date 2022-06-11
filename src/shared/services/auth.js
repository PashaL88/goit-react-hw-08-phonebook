import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const signup = async body => {
  const { data } = await instance.post('/signup', body);
  return data;
};

export const login = async body => {
  const { data } = await instance.post('/login', body);
  return data;
};
