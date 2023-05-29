import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./slices/priceSlice";

const store = configureStore({
  reducer: {
    prices: priceReducer,
  },
});

export default store;
