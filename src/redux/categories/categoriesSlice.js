import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state,
  },
});

export const { checkStatus } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
