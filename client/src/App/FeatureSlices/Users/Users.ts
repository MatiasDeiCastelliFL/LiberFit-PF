import { createSlice } from "@reduxjs/toolkit";

export interface usersState {
    users : Array<{}>
}

const initialState: usersState = {
    users: []
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
    },
});

export default usersSlice.reducer;
export const { getAllUsers, postUsers } = usersSlice.actions;
