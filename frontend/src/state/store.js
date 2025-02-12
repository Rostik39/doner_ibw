import { configureStore } from "@reduxjs/toolkit";
import tipReducer from "./Tip/tipSlice.js";
import userReducer from "./user/userSlice.js";

export const store = configureStore({
    reducer: {
        tip: tipReducer,
        user: userReducer 
    }
})

