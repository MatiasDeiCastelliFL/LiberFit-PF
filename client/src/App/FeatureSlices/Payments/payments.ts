import { createSlice } from "@reduxjs/toolkit";

export interface paymentState {
    paymentState : Array<{}>
}

const initialState: paymentState = {
    paymentState: []
}

const usersSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        payment: (state, action) => {
            state.paymentState = action.payload
        },
        paymentALL:(state, action) => {
            state.paymentState = action.payload
        }
    },
});

export default usersSlice.reducer;
export const { payment,paymentALL } = usersSlice.actions;