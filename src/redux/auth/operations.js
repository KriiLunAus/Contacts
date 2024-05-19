import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
};


export const registerUser = createAsyncThunk("auth/register",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", data);
            setHeader(response.data.token);
            return response.data;
            
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logInUser = createAsyncThunk("auth/logIn",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", data);
            setHeader(response.data.token); 
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logOutUser = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
        }
    
)