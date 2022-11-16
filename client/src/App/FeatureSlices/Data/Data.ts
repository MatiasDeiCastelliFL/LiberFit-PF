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
    paymentinfo: any;
    subscriptions: any;
    trainings: any;
    gym: any

}

const initialState: filterState = {
    data: ["data"],
    locations: [],
    user: [],
    payment: [],
    allClients: [],
    clients: [],
    employees: [],
    paymentinfo: [],
    subscriptions: [],
    trainings: [],
    gym: []
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
            // let filtrado = state.allClients.map((e: any) => e.id !== action.payload )
            // console.log(state.clients.filter((e: any) => e.id !== action.payload ));
            // const filtrado = state.allClients
            state.clients = state.clients.filter((e: any) => e.id !== action.payload )
        },
        getGymReducer: (state, action: PayloadAction<any>) => {
            state.gym = action.payload
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
    initilizePayment, 
    getSubscriptionsReducer,
    getTrainingsReducer,
    deleteClientsReducer,
    getGymReducer
} = dataSlice.actions;
      
