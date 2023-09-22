

import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as API from './Api'; 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await fetchContacts(); 
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  try {
    const response = await addContact(contact);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  try {
    await deleteContact(contactId); 
    return contactId;
  } catch (error) {
    throw error;
  }
});