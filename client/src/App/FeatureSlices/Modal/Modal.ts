import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface modalState {
    open : boolean
}

const initialState: modalState = {
    open: false
}

const modalSlice  = createSlice( {
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state, action:PayloadAction<boolean>) => {
            state.open = action.payload
        }
    }
})


export default modalSlice.reducer
export const {modalOpen} = modalSlice.actions