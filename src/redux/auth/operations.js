import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
};

const removeHeader = () => {
            axios.defaults.headers.common["Authorization"] = "";
    
}


export const registerUser = createAsyncThunk("auth/register",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", data);
            setHeader(response.data.token);
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
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
             return thunkAPI.rejectWithValue(error.message)

        }
    }
)

export const logOutUser = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
            removeHeader();
        } catch (error) {
           return thunkAPI.rejectWithValue(error.message)
        }
        }
    
)

export const refreshUser = createAsyncThunk("auth/refresh",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;
        setHeader(token)
        const response = await axios.get("/users/current");
        return response.data;
    },
    {
        condition(_, thunkAPI) {
        const token = thunkAPI.getState().auth.token;
            return token !== null;
    }}
)