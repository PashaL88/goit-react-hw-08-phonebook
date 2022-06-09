import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../shared/services/contacts';

export const contactsFetch = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await API.addContact();
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const contacts = getState();
      const dublicate = contacts.items.find(item => item.name === data.name);
      if (dublicate) {
        alert(`${data.name} is already in contacts`);
        return false;
      }
      return data;
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { id: deleteId } = await API.deleteContact(id);
      return deleteId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
