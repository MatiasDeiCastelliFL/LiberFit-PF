import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface filterState {
    data: any
    dataByName : any
}

const initialState: filterState = {
    data : [],
    dataByName : []
}

const filterSlice = createSlice( {
    name: 'filter',
    initialState,
    reducers: {
        filterDataName : (state , action:PayloadAction<any>) => {
            state.dataByName = action.payload
        }
    }
})


export default filterSlice.reducer
export const {filterDataName} = filterSlice.actions