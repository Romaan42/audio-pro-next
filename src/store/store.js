import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartItemsSlice";
import checkLoginSlice from "./slices/checkLoginSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      user: checkLoginSlice.reducer,
    },
  });
};
