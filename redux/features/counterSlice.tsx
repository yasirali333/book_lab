
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { PayloadAction } from "@reduxjs/toolkit";
export interface Book {
  length(length: any): unknown;
  author: string;
  country: string;
  language: string;
  pages: number;
  link: string;
  imageLink: string;
  title: string;
  price: number;
  rating: number;
  reviews: string[];
  is_liked: boolean;
  year: number;

}


export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ apiKey, url }:any) => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    return data;
  }
);
export interface CounterState {
  loading: boolean;
  error: any; // Replace 'any' with the appropriate error type if available
  data: Book[] | null;
  searchedBook: Book[];
  books: Book[];
}

const counterSlice= createSlice({
  name: 'data',
  initialState: {
    books: [],
    loading: false,
    error: null,
    data: null  ,
    searchedBook: [],
  }as CounterState,
  reducers: {
    handleSearchedBooks: (state, action: PayloadAction<Book[]>) => {
      // state.searchedBook = [];
      // state.searchedBook = action.payload;
      state.searchedBook = [...action.payload];
    },
    handleRemoveSearchedBooks: (state) => {
      state.searchedBook = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});
export const { handleSearchedBooks, handleRemoveSearchedBooks } =
  counterSlice.actions;

export default counterSlice.reducer;