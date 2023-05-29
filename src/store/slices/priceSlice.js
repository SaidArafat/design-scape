import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = `http://localhost:5001/prices`;

export const fetchPrices = createAsyncThunk(
  "prices/fetchPrices",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`${apiEndpoint}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  prices: [],
  isLoading: false,
  error: null,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {},
  // fetch prices list
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPrices.fulfilled, (state, action) => {
      state.prices = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPrices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = priceSlice.actions

export default priceSlice.reducer;
