import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userAPI";

const initialState = {
  status: "idle",
  userBookings: [],
  user: {},
  message: "",
};

export const fetchUserDataAsync = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await fetchUserData();
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    userOut: (state) => {
      state.userBookings = [];
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.data.user;
      })
      .addCase(fetchUserDataAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      });
  },
});

export const { clearMessage, userOut } = userSlice.actions;

export const selectuser = (state) => state.user;

export default userSlice.reducer;
