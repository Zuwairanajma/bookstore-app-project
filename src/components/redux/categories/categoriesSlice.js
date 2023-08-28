import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setUnderConstruction: (state) => {
      state.categories = ['Under construction'];
    },
  },
});

export const { setUnderConstruction } = categoriesSlice.actions;
export default categoriesSlice.reducer;
