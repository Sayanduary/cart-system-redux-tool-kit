import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartCount: localStorage.getItem("CART")
      ? JSON.parse(localStorage.getItem("CART"))
      : [],
  },
  reducers: {
    addToCart: (state, reqData) => {
      let { cartObj } = reqData.payload;
      state.cartCount = [cartObj, ...state.cartCount];
      localStorage.setItem("CART", JSON.stringify(state.cartCount));
    },
    deleteCart: (state, reqData) => {
      const { id } = reqData.payload;
      state.cartCount = state.cartCount.filter((item) => item.id !== id);
      localStorage.setItem("CART", JSON.stringify(state.cartCount));
    },
    changeQty: (state, reqData) => {
      const { id, finalQty } = reqData.payload;
      state.cartCount = state.cartCount.map((item) => {
        if (item.id === id) {
          return { ...item, qty: finalQty };
        }

        return item;
      });
      localStorage.setItem("CART", JSON.stringify(state.cartCount));
    },
  },
});

export const { addToCart, deleteCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
