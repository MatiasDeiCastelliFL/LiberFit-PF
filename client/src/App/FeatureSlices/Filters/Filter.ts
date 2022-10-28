import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface filterState {
    data: any
    dataByName : any
    open: boolean
    exercisesByMuscle : any
    dataByPrice : any
}

const initialState: filterState = {
    data : [],
    dataByName : [],
    open: false,
    exercisesByMuscle : [],
    dataByPrice : []
}

const filterSlice = createSlice( {
    name: 'filter',
    initialState,
    reducers: {
        filterDataName : (state , action:PayloadAction<any>) => {
            state.dataByName = action.payload
        },
        filterDataPrice : (state , action:PayloadAction<any>) => {
            state.dataByPrice = action.payload
        },
        filterExercisesByMuscles : (state , action:PayloadAction<any>) => {
            state.exercisesByMuscle = action.payload
        },

    }
})




export default filterSlice.reducer
export const {filterDataName, filterExercisesByMuscles, filterDataPrice} = filterSlice.actions