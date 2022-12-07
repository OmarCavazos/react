import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

export const counterSlice = createSlice({
    name: "counter",
    // initialState: 100,
    // reducers: {
    //     increment: (state) => {
    //         state += 1;
    //     }
    // },
// -----------------------------------

    initialState,
    reducers: {
        increment: (kaka) => {
            kaka.value += 1;
        },
        decrement: (kaka) => {
            kaka.value -= 1;
        },
    },
// ----------------------------------

//     initialState,
//     reducers: {
//         increment: (state, action) => {
//             state.value += action.payload;
//         },
//         decrement: (state, action) => {
//             state.value -= action.payload;
//         },
//     },

});
// export const { increment, decrement } = counterSlice.actions;
export const { increment, decrement } = counterSlice.actions;

// export const incrementCounter =() => ( dispatch ) => {
//     dispatch( increment(1));
// };

// export const decrementCounter =(num) => ( dispatch ) => {
//     dispatch( decrement(num));
// }


export default counterSlice.reducer;