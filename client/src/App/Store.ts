import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FeatureSlices/Filters/Filter'
import modalReducer from './FeatureSlices/Modal/Modal'
import usersReducer from "./FeatureSlices/Users/Users"
import dataReducer from "./FeatureSlices/Data/Data"
import loginReducer from './FeatureSlices/login/login'
import payment from './FeatureSlices/Payments/payments'
import paymentALL from "./FeatureSlices/Payments/payments"
export const store = configureStore({
    reducer: {
        filter: filterReducer,
        modal: modalReducer,
        users: usersReducer,
        data: dataReducer,
        login: loginReducer,
        payment:payment,
        paymentALL:paymentALL
    }
})


export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch