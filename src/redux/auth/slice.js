import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser, registerUser } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,   
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (state, action)=> {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logInUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOutUser.fulfilled, (state) => {
                state = {
                    
                    user: {
                        name: null,
                        email: null,
                    },
                    token: null,
                    isLoggedIn: false,
                    isRefreshing: false,   
                }
        })
    }
})

export default authSlice.reducer;