import { createSlice } from '@reduxjs/toolkit';

import { signup, login, getCurrentUser } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSLice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => ({
      ...store,
      ...payload,
      isLogin: true,
      loading: false,
    }),
    [signup.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [login.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => ({
      ...store,
      ...payload,
      isLogin: true,
      loading: false,
    }),
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [getCurrentUser.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.user = payload.user;
    },
    [getCurrentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.token = '';
    },
  },
});

export default authSLice.reducer;
