import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./slices/priceSlice";
import feedbackReducer from "./slices/feedbackSlice";

const store = configureStore({
  reducer: {
    prices: priceReducer,
    feedbacks: feedbackReducer,
  },
});

export default store;
