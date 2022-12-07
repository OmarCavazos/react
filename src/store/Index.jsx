import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/CounterSlice";
import QuotesReducer from "./slices/QuotesSlices";


export const store = configureStore({
    reducer:{
        counter: counterReducer,
        quotes: QuotesReducer,

    },
})