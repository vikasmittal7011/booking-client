import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createHotel, getHotelById, getHotelByUser, getHotels, upateHotel } from "./hotelAPI";

const initialState = {
  status: "idle",
  updateStatus: "idle",
  message: "",
  hotelCreate: false,
  hotelUpdate: false,
  hotel: [],
  hotels: [],
  totalProduct: 0,
  fetchedHotel: {},
  ownerHotels: []
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

export const getHotelByUserAsync = createAsyncThunk(
  "hotel/getHotelByUser",
  async () => {
    const response = await getHotelByUser();
    return response;
  }
);

export const updateHotelAsync = createAsyncThunk(
  "hotel/updateHotel",
  async (hotel) => {
    const response = await upateHotel(hotel);
    return response;
  }
);

export const getHotelsAsync = createAsyncThunk(
  "hotel/getHotels",
  async (data) => {
    const response = await getHotels(data);
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
      state.hotelUpdate = false;
      state.hotel = {};
    },
    clearData: (state) => {
      state.ownerHotels = []
    }
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
      .addCase(getHotelByUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHotelByUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.ownerHotels = action.payload.data.hotels;
      })
      .addCase(getHotelByUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      })
      .addCase(updateHotelAsync.pending, (state) => {
        state.updateStatus = "loading";
      })
      .addCase(updateHotelAsync.fulfilled, (state, action) => {
        state.updateStatus = "idle";
        state.hotelUpdate = true;
        state.hotel = action.payload.data.hotel;
        state.message = "Hotel is update successfully added!!"
      })
      .addCase(updateHotelAsync.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.message = action.error.message;
      })
      .addCase(getHotelsAsync.pending, (state) => {
        state.updateStatus = "loading";
      })
      .addCase(getHotelsAsync.fulfilled, (state, action) => {
        state.updateStatus = "idle";
        state.hotels = action.payload.data.hotels;
        state.totalProduct = action.payload.data.totalDocsCount;
      })
      .addCase(getHotelsAsync.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.message = action.error.message;
      })
  },
});

export const { clearMessage, clearData } = hotelSlice.actions;

export const selecthotel = (state) => state.hotel;

export default hotelSlice.reducer;
