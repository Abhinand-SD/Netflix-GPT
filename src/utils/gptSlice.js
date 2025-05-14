import { createSlice } from "@reduxjs/toolkit";
import GptSearch from "../components/GptSearch";

const gptSlice = createSlice({
    name: GptSearch,
    initialState : {
        showGptSearch :false,
        movieName : null,
        movieResult: null
    },
    reducers : {
        toggleGptSearch : (state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovies :(state,action) => {

            const { movieName, movieResult } = action.payload
            state.movieName = movieName;
            state.movieResult= movieResult;
        }
    }
})

export const {toggleGptSearch, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;