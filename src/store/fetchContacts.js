import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6481ab2929fa1c5c5031d6e8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts/contacts");
      return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
  } 
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts/contacts/", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/contacts/${contactId}`, {
        name,
        number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

