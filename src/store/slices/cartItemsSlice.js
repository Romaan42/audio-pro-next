import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], loading: false },
  reducers: {},
});

export default cartSlice;
