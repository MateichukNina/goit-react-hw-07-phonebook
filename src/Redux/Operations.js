
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from './API'; 

export const fetchAllContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await API.fetchContacts(); 
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

 export const newContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
   try {
     const response = await API.addContact(contact);
     return response.data;
   } catch (e) {
    return thunkAPI.rejectWithValue(e.message);;
   }
 });

 export const removeContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
   try {
    const response = await API.deleteContact(contactId); 
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);;
   }
 });