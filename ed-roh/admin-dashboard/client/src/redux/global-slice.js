import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode: "dark"
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.mode = state.mode == "dark" ? "light" : "dark"
        }
    }
})

export const { toggleDarkMode } = globalSlice.actions

export default globalSlice.reducer
