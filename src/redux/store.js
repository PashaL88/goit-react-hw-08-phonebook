import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-slice';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;

// import { createStore } from 'redux';
// import reducer from './contacts/contactsReducer';

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
