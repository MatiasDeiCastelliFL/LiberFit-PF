import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arraySet from "../../utils/arraySet";
import { useLocation, useParams } from "react-router-dom";

export interface filterState {
    data: any;
    locations: [];
    user: any;
    allClients: any,
    clients: any;
    employees: any;
    payment: any;
    payments: any;
    paymentinfo: any;
    subscriptions: any;
    trainings: any;
    gym: any;
    reviews: any;
}

const initialState: filterState = {
    data: ["data"],
    locations: [],
    user: [],
    payment: [],
    allClients: [],
    clients: [],
    employees: [],
    payments: [],
    paymentinfo: [],
    subscriptions: [],
    trainings: [],
    gym: [],
    reviews: [],
};

const dataSlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<any>) => {
            state.locations = action.payload;
        },
        getLocationsReducer: (state, action: PayloadAction<any>) => {
            state.locations = action.payload;
        },
        getUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        getClientsReducer: (state, action: PayloadAction<any>) => {
            state.allClients = action.payload;
            state.clients = action.payload;
        },
        getEmployeesReducer: (state, action: PayloadAction<any>) => {
            state.employees = action.payload.datoEmpleadoTot
        },
        initilizePayment: (state, action: PayloadAction<any>) => {
                console.log(action.payload)
                state.paymentinfo = {
                    amount : action.payload.amount,
                    description : action.payload.description,
                    subscriptionId : action.payload.id,
                }
        },
        postPayment: (state, action: PayloadAction<any>) => {
            state.payment = action.payload;
        },
        getSubscriptionsReducer: (state, action: PayloadAction<any>) => {
            state.subscriptions = action.payload;
        },
        getTrainingsReducer: (state, action: PayloadAction<any>) => {
            state.trainings = action.payload;
        },
        deleteClientsReducer: (state, action: PayloadAction<any>) => {
            state.clients = state.clients.filter((e: any) => e.id !== action.payload )
        },
        getGymReducer: (state, action: PayloadAction<any>) => {
            state.gym = action.payload
        },
        getPaymentsReducer: (state, action: PayloadAction<any>) => {
            state.payments = action.payload;
        },
        getReviewsReducer: (state, action: PayloadAction<any>) => {
            state.reviews = action.payload;
        }

    },
});

export default dataSlice.reducer;
export const { 
    getData, 
    getLocationsReducer, 
    getUser, 
    getClientsReducer,
    getEmployeesReducer,
    postPayment, 
    getPaymentsReducer,
    initilizePayment, 
    getSubscriptionsReducer,
    getTrainingsReducer,
    deleteClientsReducer,
    getGymReducer,
    getReviewsReducer
} = dataSlice.actions;
      
