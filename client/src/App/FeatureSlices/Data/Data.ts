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
    filteredMachines: any[];
    filteredExercises: any[];
    filteredTrainings: any[];
    dataByName: any;
    allData: any;
}

const initialState: filterState = {
    data: ["data"],
    locations: [],
    
    products: [],
    exercises: [],
    trainigns: [],
    machines: [],
    
    allData: [],
    dataByName: [],

    filteredProducts: [],
    filteredMachines: [],
    filteredExercises: [],
    filteredTrainings: [],
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
            state.filteredProducts = state.products;
            state.filteredMachines = state.machines;
            state.filteredExercises = state.exercises;
            state.filteredTrainings = state.trainigns;
        },
        filterByPrice: (state, action: PayloadAction<any>) => {
            let minPrice = [...state.products].filter(
                (d) => d.price >= action.payload[0]
            );
            let maxPrice = [...state.products].filter(
                (d) => d.price <= action.payload[1]
            );
            state.filteredProducts = state.products.filter(
                (p) => minPrice.includes(p) && maxPrice.includes(p)
            );
        },
        filterByMuscles : (state, action: PayloadAction<any>) => {
            let muscles = action.payload[0];
            let category = action.payload[1];
            if (category === "machines") {
                state.filteredMachines = state.machines.filter((d: { muscles: any; }) =>
                    muscles.includes(d.muscles)
                );
            } else if (category === "exercises") {
                console.log("filtrando exercises");
                state.filteredExercises = state.exercises.filter((d: { muscles: any; }) =>
                    muscles.includes(d.muscles)
                );
            } 
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
export const { filterDataName, getData, filterByPrice, filterByMuscles } = dataSlice.actions;
