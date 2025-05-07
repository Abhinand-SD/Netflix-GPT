import { createSlice } from '@reduxjs/toolkit'


const configLaguageSlice = createSlice({

    name: 'laguage',
    initialState :{
        language: "en" },
    reducers : {
           addLanguage : (state,action) => {
            state.language = action.payload;
           }
    }    

})

export const {addLanguage} = configLaguageSlice.actions;

export default configLaguageSlice.reducer;
