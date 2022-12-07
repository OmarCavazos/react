import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    value: [],
}

const quotesSlices = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        getAll: ( state, action ) =>{
            state.value = action.payload;
        },    
        getByName: ( state, action ) =>{
            state.value = action.payload;
        },    
    },
});

export const { getAll, getByName } = quotesSlices.actions;

export const getAllQuotes = () => (dispatch) => { 
    axios
        .get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10`)
        .then((data) => dispatch (getAll(data.data)))
        .catch((error) => {
            console.log("error", error);
        })
};

export const getQuoteByName = (name) => (dispatch) => { 
    axios
        .get(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${name}`)
        .then((data) => dispatch (getByName(data.data)))
        .catch((error) => {
            console.log("error", error);
        })
};

export default quotesSlices.reducer