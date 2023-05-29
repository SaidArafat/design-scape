import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./slices/priceSlice";
import orderReducer from "./slices/orderSlice";
import feedbackReducer from "./slices/feedbackSlice";

const store = configureStore({
  reducer: {
    prices: priceReducer,
    orders: orderReducer,
    feedbacks: feedbackReducer,
  },
});

export default store;
