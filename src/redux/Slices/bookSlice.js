import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
    name: "book",
    initialState: {
        bookName: "",
        favourite: [],
        modal: false
    },
    reducers: {
        searchBook: (state, action) => {
            state.bookName = action.payload
        },
        modalToggle: (state, action) => {
            state.modal = action.payload
        }
    }
})

export const { searchBook, modalToggle } = bookSlice.actions
export default bookSlice