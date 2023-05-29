import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = `http://localhost:5001/orders`;

export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (order, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(`${apiEndpoint}`, order);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add order
    builder.addCase(addOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = orderSlice.actions

export default orderSlice.reducer;
