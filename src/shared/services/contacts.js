import instance from './auth';
import { addToken } from './auth';
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/contacts',
// });

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  // const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  // const { data: result } = await axios.post('/contacts', data);
  addToken(data.token);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  // const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
