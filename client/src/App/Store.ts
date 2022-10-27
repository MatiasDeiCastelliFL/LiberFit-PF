import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FeatureSlices/Filters/Filter'
import contryReducer from './FeatureSlices/Data/Data'


export const store = configureStore({
    reducer: {
        filter: filterReducer,
        country: contryReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch