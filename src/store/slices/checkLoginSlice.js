import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkLogin = createAsyncThunk(
  "check-login",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/check-login", {
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        return data.user;
      }

      return rejectWithValue(null);
    } catch (error) {
      return rejectWithValue(null);
    }
  },
);

const checkLoginSlice = createSlice({
  name: "checklogin",
  initialState: { user: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkLogin.pending, (state) => {
        state.loading = true;
        state.user = null;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(checkLogin.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default checkLoginSlice;
