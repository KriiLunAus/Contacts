import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/slice"
import filterReducer from "./filters/slice";




const store = configureStore({
    reducer:{
        contacts: contactReducer,
        filters: filterReducer,
    }, 
});


export default store;