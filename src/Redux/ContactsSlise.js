import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


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
  },
    
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
