import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPoi = createAsyncThunk(
    'poi/getPoi',
    async () => {
        const response = await fetch('https://warply.s3.amazonaws.com/data/test_pois.json')
        const format = await response.json();
        return format;
    }

);

export const poiSlice = createSlice({
    name: 'poi',
    initialState:{
        poi:[],
        status: null,
    },
    
    extraReducers:{
        [getPoi.pending]:(state)=>{
            state.status = "loading";
        },   
        [getPoi.fulfilled]:(state, action)=>{
            state.loc= action.payload;
            state.status = "success";
        },
        [getPoi.rejected]:(state)=>{
            state.status = "failed";
        },
        
    },
});

export default poiSlice.reducer;