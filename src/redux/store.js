import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./Slices/bookSlice"

export const store = configureStore({
    reducer: {
        book: bookSlice.reducer
    }
})