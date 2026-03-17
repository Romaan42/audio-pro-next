import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartItemsSlice";
import checkLoginSlice from "./slices/checkLoginSlice";
import cartSidebar from "./slices/cartSidebar";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      user: checkLoginSlice.reducer,
      cartSidebar: cartSidebar.reducer,
    },
  });
};
