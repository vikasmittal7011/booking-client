import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createHotel } from "./hotelAPI";

const initialState = {
  status: "idle",
  message: "",
  hotelCreate: false,
  hotel: {}
};

export const createHotelAsync = createAsyncThunk(
  "hotel/createHotel",
  async (hotel) => {
    const response = await createHotel(hotel);
    return response;
  }
);

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
      state.hotelCreate = false;
      state.hotel = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHotelAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createHotelAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotelCreate = true;
        state.hotel = action.payload.data.hotel;
        state.message = "Hotel is add successfully added!!"
      })
      .addCase(createHotelAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
  },
});

export const { clearMessage } = hotelSlice.actions;

export const selecthotel = (state) => state.hotel;

export default hotelSlice.reducer;
