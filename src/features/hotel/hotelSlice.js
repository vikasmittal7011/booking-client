import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createHotel, getHotelById } from "./hotelAPI";

const initialState = {
  status: "idle",
  message: "",
  hotelCreate: false,
  hotel: {},
  fetchedHotel: {},
};

export const createHotelAsync = createAsyncThunk(
  "hotel/createHotel",
  async (hotel) => {
    const response = await createHotel(hotel);
    return response;
  }
);

export const getHotelByIdAsync = createAsyncThunk(
  "hotel/getHotelById",
  async (id) => {
    const response = await getHotelById(id);
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
      .addCase(getHotelByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHotelByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.fetchedHotel = action.payload.data.hotel;
      })
      .addCase(getHotelByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
  },
});

export const { clearMessage } = hotelSlice.actions;

export const selecthotel = (state) => state.hotel;

export default hotelSlice.reducer;
