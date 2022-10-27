import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FeatureSlices/Filters/Filter'
import modalReducer from './FeatureSlices/Modal/Modal'


export const store = configureStore({
    reducer: {
        filter: filterReducer,
        modal: modalReducer

    }
})


export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch