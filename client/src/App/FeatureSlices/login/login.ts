import { createSlice } from "@reduxjs/toolkit";

export interface usersState {
    login : Array<{}>
}

const initialState: usersState = {
    login: []
}

const usersSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            state.login = action.payload
            console.log('---',state.login)
        }
    },
});

export default usersSlice.reducer;
export const { login } = usersSlice.actions;