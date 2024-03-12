import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import hotelReducer from "../features/hotel/hotelSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        hotel: hotelReducer
    },
});
