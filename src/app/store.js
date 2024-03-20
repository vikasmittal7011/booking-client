import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import hotelReducer from "../features/hotel/hotelSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        hotel: hotelReducer,
        booking: bookingReducer
    },
});
