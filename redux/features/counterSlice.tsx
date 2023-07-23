
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Error from 'next/error';

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

const counterSlice= createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    data: null  ,
  },
  reducers: {},
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

export default counterSlice.reducer;