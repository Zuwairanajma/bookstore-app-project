import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoriesPage: (state, action) => {
            state.categories = action.payload === 'Categories Page' ? ['Categories Page'] : state.categories;
        },
    },
});

export const { categoriesPage } = categoriesSlice.actions;
export default categoriesSlice.reducer;