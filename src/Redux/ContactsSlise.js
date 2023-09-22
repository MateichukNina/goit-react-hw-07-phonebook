import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from "./Operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

 const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
    
      state.items = action.payload;
     },
     setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
     clearError: (state) => {
       state.error = null;
    },
    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [addContact.pending]: handlePending,
      [deleteContact.pending]: handlePending,
      [fetchContacts.rejected]: handleRejected,
      [addContact.rejected]: handleRejected,
      [deleteContact.rejected]: handleRejected,

      [fetchContacts.fulfilled](state,action) {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
      },

      [addContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
      },

       [deleteContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
              contact => contact.id === action.payload.id);
          state.items.splice(index, 1);
      },
  },
}
});
export const contactReducer = ContactSlice.reducer;
const persistConfig = {
  key: 'root',
  storage,
};

 export const persistedContactsReducer = persistReducer(
   persistConfig,
  contactReducer
);

export const { setContacts, setLoading, setError, clearError } = ContactSlice.actions;
