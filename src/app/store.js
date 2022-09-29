import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice"



const store = configureStore({
    reducer:{
        post:PostReducer
    }

})
export default store