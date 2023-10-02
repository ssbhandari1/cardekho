import { configureStore } from "@reduxjs/toolkit";
import carDataReducer from "./carDataSlice";


const store=configureStore({
    reducer:{
        carData:carDataReducer
    }
})

export default store