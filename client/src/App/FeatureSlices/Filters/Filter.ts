import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { data } from 'autoprefixer';

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
        openFilter : (state, action:PayloadAction<any>) => {
            state.open = action.payload
        },
        filterDataPrice : (state , action:PayloadAction<any>) => {    
            state.dataByPrice = [...state.data]
        },
        filterExercisesByMuscles : (state , action:PayloadAction<any>) => {
            state.exercisesByMuscle = action.payload
        },

    }
})




export default filterSlice.reducer
export const {filterExercisesByMuscles, filterDataPrice, openFilter} = filterSlice.actions