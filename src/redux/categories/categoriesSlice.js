// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   categories: [],
// };

// const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     setUnderConstruction: (state, action) => {
//       state.categories = action.payload === 'Under construction'
//         ? 'Under construction'
//         : state.categories;
//     },
//   },
// });

// export const { setUnderConstruction } = categoriesSlice.actions;
// export default categoriesSlice.reducer;

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
