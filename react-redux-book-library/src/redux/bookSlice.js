import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fakeAPI from "../fakeAPI";

//async thunk action for fetching books by fakeAPI
//createAsyncThunk is used for take exterior action
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const data = await fakeAPI.fetchBooks();
    return data;
  } catch (error) {
    console.error("failed to fetch books:", error);
    throw error;
  }
});

//handle fetched data by reducers
const bookSlice = createSlice({
  name: "books",
  initialState: [],
  //interior actions defined in reducers
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },

  //react with createAsyncThunk
  //exterior action defined in extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.error("failed to fetch books in reducer:", action.error);
      });
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
