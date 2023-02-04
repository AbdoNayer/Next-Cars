import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
    name: "langCars",
    initialState: { langCars : null },
    reducers: {
        langReducer: (state, action) => {
            state.langCars = action.payload;
        },
    },
});

export const { langReducer } = langSlice.actions;

export default langSlice.reducer;