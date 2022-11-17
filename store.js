import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import restrauntReducer from "./slices/restrauntSlice";


export const store = configureStore({

    reducer:{
        basket : basketReducer,
        restraunt: restrauntReducer
    },
})