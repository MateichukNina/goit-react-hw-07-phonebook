

import { configureStore } from "@reduxjs/toolkit";
import{ persistedContactsReducer}  from "./ContactsSlise";
import { filterReducer } from "./FilterSlice";
import { persistStore } from 'redux-persist';

// const md1 = store => next => action =>{
//   console.log('md1', action);
//   next(action);
// }



// function md2(store){
//   return function(next){
//     return function(action){
//       console.log('md2', action);
//       next(action);
//     }
//   }
// }


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  }
   ,
  middleware: (getDefaultMiddleware) => {
    const defaultMd = getDefaultMiddleware({
      serializableCheck: false,
    });
    
    return [...defaultMd];
  },
});

export const persistor = persistStore(store);



