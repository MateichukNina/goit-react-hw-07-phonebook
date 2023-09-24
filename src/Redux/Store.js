import { configureStore } from "@reduxjs/toolkit";
import{ contactReducer}  from "./ContactsSlise";
import { filterReducer } from "./FilterSlice";



export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  }
  
});

