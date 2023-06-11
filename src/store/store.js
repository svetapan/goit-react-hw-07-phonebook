import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reduser';
import filterReducer from './filterSlice';

const store = configureStore({
  // reducer: contactsReducer,
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});

export default store;
