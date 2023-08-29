import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zSUAfqgJTcTRwKk6JO0In/books';
// const initialState = {
// Initial state:
// books: [],
// isLoading: true,
// err: null,
// };

// export const getBookItems = createAsyncThunk('books/getBookItems', () =>
// fetch(apiURL).then((res) => res.data).catch((err) => console.log(err)));
export const getBookItems = createAsyncThunk('books/getBookItems', async (_, thunkAPI) => {
  try {
    const response = await axios.get(apiURL);
    const data = await response.json();
    return data; // Return the fetched data as the payload
  } catch (error) {
    // throw error; // Rethrow the error to be caught by the rejected case
    return thunkAPI.rejectWithValue('Request failed');
  }
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(apiURL, book);
      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed');
    }
  },
);

export const removeBook = createAsyncThunk('books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${apiURL}/${itemId}`);

      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Book not deleted');
    }
  });

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: true,
    error: null,
  },

  reducers: {
    // addBook: (state, action) => {
    //   state.books.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   const itemId = action.payload;
    //   state.books = state.books.filter((book) => book.itemId !== itemId);
    // },
  },

  extraReducers: {
    [getBookItems.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBookItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBookItems.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});
//  export { addBook, removeBook } = booksSlice.actions;
// export {
//   addBook,
//   removeBook,
// };
export default booksSlice.reducer;
