import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: false};

const tipSlice = createSlice({
    name: "tip",
    initialState,
    reducers: {
        initTip: (state, action) => {
            state.value = action.payload
        },
        switchTip: (state) => {
            state.value = !state.value
        }
    }
})

export const { switchTip, initTip } = tipSlice.actions;
export default tipSlice.reducer;