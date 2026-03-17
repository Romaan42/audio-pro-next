import { createSlice } from "@reduxjs/toolkit";

const cartSidebar = createSlice({
  name: "cartSideBar",
  initialState: false,
  reducers: {
    setOpen: () => {
      return true;
    },
    setClose: () => {
      return false;
    },
  },
});

export const { setClose, setOpen } = cartSidebar.actions;
export default cartSidebar;
