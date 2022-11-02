import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arraySet from "../../utils/arraySet";

export interface filterState {
    data: any[];
    dataByName: any[];
    dataByPrice: any[];
    dataLocation: any[];
    products: any[];
    exercises: any[];
    trainigns: any[];
    machines: any[];
    filteredProducts: any[];
    filteredMachines: any[];
    filteredExercises: any[];
    filteredTrainings: any[];
    allData: any[];
    open: boolean;
}

const initialState: filterState = {
    data: [],
    dataByName: [],
    dataLocation: [],
    dataByPrice: [],
    products: [],
    exercises: [],
    trainigns: [],
    machines: [],
    filteredProducts: [],
    filteredMachines: [],
    filteredExercises: [],
    filteredTrainings: [],
    allData: [],
    open: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<any>) => {
            
            state.dataLocation = action.payload.data

            state.exercises = action.payload.exercises;
            state.machines = action.payload.machines;
            state.products = action.payload.products;
            state.trainigns = action.payload.trainings;

            state.filteredProducts = state.products;
            state.filteredMachines = state.machines;
            state.filteredExercises = state.exercises;
            state.filteredTrainings = state.trainigns;

            state.data = [
                ...state.exercises,
                ...state.products,
                ...state.machines,
                ...state.trainigns,
            ];
        },
        openFilter: (state, action: PayloadAction<any>) => {
            state.open = action.payload;
        },
        filterDataPrice: (state, action: PayloadAction<any>) => {
            let minPrice = [...state.products].filter(
                (d) => d.price >= action.payload[0]
            );
            let maxPrice = [...state.products].filter(
                (d) => d.price <= action.payload[1]
            );
            state.filteredProducts = state.products.filter(
                (d) => minPrice.includes(d) && maxPrice.includes(d)
            );
            console.log('fILTERED pRODUCTS',maxPrice);
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
                    [...state.data]
                        .filter((d) =>
                            d.name.toLowerCase().includes(action.payload)
                        )
                        .flat()
                );
            } else if (location.pathname === "/home/Exercises") {
                state.exercises = arraySet(
                    [...state.exercises]
                        .filter((d) =>
                            d.name.toLowerCase().includes(action.payload)
                        )
                        .flat()
                );
            } else if (location.pathname === "/home/Trainings") {
                state.trainigns = arraySet(
                    [...state.trainigns]
                        .filter((d) =>
                            d.name.toLowerCase().includes(action.payload)
                        )
                        .flat()
                );
            } else if (location.pathname === "/home/Products") {
                state.products = arraySet(
                    [...state.products]
                        .filter((d) =>
                            d.name.toLowerCase().includes(action.payload)
                        )
                        .flat()
                );
            } else if (location.pathname === "/home/Machines") {
                state.machines = arraySet(
                    [...state.machines]
                        .filter((d) =>
                            d.name.toLowerCase().includes(action.payload)
                        )
                        .flat()
                );
            }
        },
    },
});

export default filterSlice.reducer;
export const { getData, filterDataName, filterDataPrice, openFilter } =
    filterSlice.actions;
