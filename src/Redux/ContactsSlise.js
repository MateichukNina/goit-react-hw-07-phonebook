import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, newContact, removeContact } from './Operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAllContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};



const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, handlePending)
      .addCase(fetchAllContacts.fulfilled, handleAllContactsFulfilled)
      .addCase(fetchAllContacts.rejected, handleRejected)
      .addCase(newContact.fulfilled, handleAddFulfilled)
      .addCase(newContact.rejected, handleRejected)
      .addCase(removeContact.fulfilled, handleDeleteFulfilled);
  },

  // {

  // [addContact.pending]: handlePending,
  // [deleteContact.pending]: handlePending,

  // [addContact.rejected]: handleRejected,
  // [deleteContact.rejected]: handleRejected,

  // [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  // },

  //  [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //         contact => contact.id === action.payload.id);
  //     state.items.splice(index, 1);
  // },
  // },
});
export const contactReducer = ContactSlice.reducer;

export const { setContacts, setLoading, setError, clearError } =
  ContactSlice.actions;
