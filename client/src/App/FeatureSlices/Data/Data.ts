import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arraySet from "../../utils/arraySet";
import { useLocation, useParams } from "react-router-dom";

export interface filterState {
    data: any;
    locations: [];
    exercises: any;
    trainigns: any;
    products: any[];
    machines: any;
    filteredProducts: any[];
    dataByName: any;
    allData: any;
}

const initialState: filterState = {
    data: ["data"],
    locations: [],
    products: [],
    filteredProducts: [],
    exercises: [],
    trainigns: [],
    machines: [],
    allData: [],
    dataByName: [],
};

const dataSlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.locations = action.payload[0].locations;
            state.products = arraySet(
                action.payload[0].locations
                    .map((d: { products: any }) => d.products)
                    .flat()
            );
            state.exercises = action.payload[0].exercises;
            state.filteredProducts = state.products;
            state.trainigns = arraySet(action.payload[0].locations
              .map((d: any) => d.trainings)
              .flat());
            state.machines = arraySet(action.payload[0].locations
              .map((d: any) => d.machines)
              .flat());
            state.allData = [].concat(
                ...state.products,
                ...state.machines,
                ...state.exercises,
                ...state.trainigns
            );
            console.log();
        },
        filterByPrice: (state, action: PayloadAction<any>) => {
            let minPrice = [...state.products].filter(
                (d) => d.price >= action.payload[0]
            );
            let maxPrice = [...state.products].filter(
                (d) => d.price <= action.payload[1]
            );
            state.products = state.products.filter(
                (d) => minPrice.includes(d) && maxPrice.includes(d)
            );
        },
        filterDataName: (state, action: PayloadAction<any>) => {
           
            if (location.pathname === "/home") {
                state.dataByName = arraySet(
                    [...state.allData]
                        .filter((d) => d.name.toLowerCase().includes(action.payload))
                        .flat()
                );
            }
            else if (location.pathname === "/home/Exercises"){
              state.exercises = arraySet(
                [...state.exercises]
                    .filter((d) => d.name.toLowerCase().includes(action.payload))
                    .flat()
            );
            }
            else if (location.pathname === "/home/Trainings"){
              state.trainigns = arraySet(
                [...state.trainigns]
                    .filter((d) => d.name.toLowerCase().includes(action.payload))
                    .flat()
            );
                

            }
            else if (location.pathname === "/home/Products"){
              state.products = arraySet(
                [...state.products]
                    .filter((d) => d.name.toLowerCase().includes(action.payload))
                    .flat()
            );
            }
            else if (location.pathname === "/home/Machines"){
              state.machines = arraySet(
                [...state.machines]           
                    .filter((d) => d.name.toLowerCase().includes(action.payload))
                    .flat()
            );
            }

            console.log(state.dataByName)

           
           
        },
        postData: (state, action: PayloadAction<any>) => {
            state;
        },
    },
});

export default dataSlice.reducer;
export const { filterDataName, getData, filterByPrice } = dataSlice.actions;
