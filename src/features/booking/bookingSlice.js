import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPaymentIntent, fetchMybookings } from "./bookingAPI";

const initialState = {
  status: "idle",
  intentCreated: false,
  info: {},
  myBooking: [],
};

export const createPaymentIntentAsync = createAsyncThunk(
  "booking/createPaymentIntent",
  async (amount) => {
    const response = await createPaymentIntent(amount);
    return response;
  }
);

export const fetchMybookingsAsync = createAsyncThunk(
  "booking/fetchMybookings",
  async () => {
    const response = await fetchMybookings();
    return response;
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentIntentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPaymentIntentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.intentCreated = true;
        state.info = action.payload.data;
      })
      .addCase(createPaymentIntentAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
      .addCase(fetchMybookingsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMybookingsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.myBooking = action.payload.data.booking;
      })
      .addCase(fetchMybookingsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
  },
});

export const { clearMessage } = bookingSlice.actions;

export const selectbooking = (state) => state.booking;

export default bookingSlice.reducer;
