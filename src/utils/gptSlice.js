import { createSlice } from "@reduxjs/toolkit";
import GptSearch from "../components/GptSearch";

const gptSlice = createSlice({
    name: GptSearch,
    initialState : {
        showGptSearch :false
    },
    reducers : {
        toggleGptSearch : (state,action) => {
            state.showGptSearch = !state.showGptSearch
        }
    }

})

export const {toggleGptSearch} = gptSlice.actions;

export default gptSlice.reducer;