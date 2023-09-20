
import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: "filters",
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export  const filterReducer =FilterSlice.reducer;
 export const { setFilter } = FilterSlice.actions;