import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";
import cartSlice from "./cartSlice.js";
export const store = configureStore({
  reducer: {
    counterStore: counterSlice,
    cartStore: cartSlice,
  },
});

export default store;
