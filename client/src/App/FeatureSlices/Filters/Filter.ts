import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface filterState {
    data: any
    dataByName : any
    exercisesByMuscle : any
}

const initialState: filterState = {
    data : [],
    dataByName : [],
    exercisesByMuscle : []
}

const filterSlice = createSlice( {
    name: 'filter',
    initialState,
    reducers: {
        filterDataName : (state , action:PayloadAction<any>) => {
            state.dataByName = action.payload
        },
        filterExercisesByMuscles : (state , action:PayloadAction<any>) => {
            state.exercisesByMuscle = action.payload
        }
    }
})




export default filterSlice.reducer
export const {filterDataName, filterExercisesByMuscles} = filterSlice.actions