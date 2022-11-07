import { createSlice } from "@reduxjs/toolkit";

export interface usersState {
    users : Array<{}>
    detail: Array<{}>
}

const initialState: usersState = {
    users: [],
    detail: []
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            state.users = action.payload
        },
        postUsers: (state, action) => {
            state
        },
        editUsers: (state, action) => {
            state
        },
        detail: (state, action) => {
            state.detail = action.payload
        }
    },
});

export default usersSlice.reducer;
export const { getAllUsers, postUsers, detail, editUsers } = usersSlice.actions;
