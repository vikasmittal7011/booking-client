import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { generateOTP, registerUser } from "./authAPI";

const initialState = {
    status: "idle",
    message: null,
    sendMail: false,
    resetPassword: false,
    sendOTP: false,
    registerSuccess: false,
    userData: {
        firstName: "Vikas",
        lastName: "Gupta",
        email: "vikasaggrawal700@gmail.com",
        password: "Sonu@9876",
        confirmPassword: "Sonu@9876"
    },
};

export const generateOTPAync = createAsyncThunk(
    "auth/generateOTP",
    async (userData) => {
        const response = await generateOTP(userData);
        return response;
    }
);

export const registerUserAync = createAsyncThunk(
    "auth/registerUser",
    async (otp) => {
        const response = await registerUser(otp);
        return response;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
        },
        retypeData: (state) => {
            state.sendOTP = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(registerUserAync.fulfilled, (state) => {
                state.status = "idle";
                state.registerSuccess = true;
                state.sendOTP = false;
                state.userData = {};
                state.message = "Registration is suucess!!";
            })
            .addCase(registerUserAync.rejected, (state, action) => {
                state.status = "failed";
                state.message = action.error.message;
            })
            .addCase(generateOTPAync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(generateOTPAync.fulfilled, (state, action) => {
                state.status = "idle";
                state.userData = action.payload.userData;
                state.sendOTP = true;
                state.message = "OTP send Suucess!!";
            })
            .addCase(generateOTPAync.rejected, (state, action) => {
                state.status = "failed";
                state.message = action.error.message;
            })
    },
});

export const { clearMessage, retypeData } = authSlice.actions;

export const selectauth = (state) => state.auth;

export default authSlice.reducer;
