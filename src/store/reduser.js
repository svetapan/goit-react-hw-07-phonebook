import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchContacts, addContacts, deleteContact, updateContact } from 'store/fetchContacts';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      // const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id);
    },
    [updateContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
