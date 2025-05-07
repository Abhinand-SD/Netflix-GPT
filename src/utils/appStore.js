import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import GptSearchReducer from "./gptSlice"
import languageReducer from "./configLanguageSlice"

const appStore = configureStore(
    {
        reducer : {
            user: userReducer,
            movies: moviesReducer,
            gpt : GptSearchReducer,
            language : languageReducer

        }
    }
)

export default appStore;