import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setOpen } from "./cartSidebar";

export const getCartItems = createAsyncThunk(
  "get-cart-items",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/cart-items", {
        withCredentials: true,
      });
      if (data.success) {
        return data.cartItems;
      }

      return rejectWithValue(data.message || "some error");
    } catch (error) {
      return rejectWithValue("something went wrong! ");
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post("/api/add-to-cart", { id });
      if (data.success) {
        dispatch(getCartItems());
        dispatch(setOpen());
      }

      return rejectWithValue(data.message);
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  },
);

export const removeFromCart = createAsyncThunk(
  "cart",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.delete(`api/remove-from-cart/${id}`);
      if (!data.success) {
        rejectWithValue(data.message);
      }

      dispatch(getCartItems());
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: null, loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.items = null;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCartItems.pending, (state) => {
        state.items = null;
        state.loading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default cartSlice;
