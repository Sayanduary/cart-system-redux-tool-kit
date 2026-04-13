import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartCount: [],
  },
  reducers: {
    addToCart: (state, reqData) => {
      let { cartObj } = reqData.payload;
      state.cartCount = [cartObj, ...state.cartCount];
    },
    deleteCart: (state) => {},
    changeQty: (state) => {},
  },
});

export const { addToCart, deleteCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
