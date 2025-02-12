import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    admin: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        initUser: (state, action) => {
            state.username = action.payload.username,
            state.admin = action.payload.admin
        },
        logoutUser: (state) => {
            state.username = null,
            state.admin = false
        }
    }
})

export const { initUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;