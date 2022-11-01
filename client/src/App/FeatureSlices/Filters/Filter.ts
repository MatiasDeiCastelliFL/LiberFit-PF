import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arraySet from "../../utils/arraySet";

export interface filterState {
    data: any[];
    dataByName: any[];
    dataByPrice: any[];
    dataLocation: any[];
    products: any[];
    filteredProducts: [];
    exercises: any[];
    trainigns: any[];
    machines: any[];
    allData: any[];
    open: boolean;
}

const initialState: filterState = {
    data: [],
    dataByName: [],
    dataLocation: [],
    dataByPrice: [],
    products: [],
    filteredProducts: [],
    exercises: [],
    trainigns: [],
    machines: [],
    allData: [],
    open: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<any>) => {
            state.allData = action.payload;
            state.dataLocation = action.payload[0].locations;
            state.exercises = action.payload[0].exercises;
            state.products = state.products = arraySet(
                action.payload[0].locations.map((d: any) => d.products).flat()
            );
            state.machines = state.machines = arraySet(
                [...state.dataLocation].map((d: any) => d.machines).flat()
            );
            state.trainigns = state.trainigns = arraySet(
                [...state.dataLocation].map((d: any) => d.trainings).flat()
            );

            state.data = [
                ...state.exercises,
                ...state.products,
                ...state.machines,
                ...state.trainigns,
            ];

            console.log(state.dataLocation)
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
            state.products = state.products.filter(
                (d) => minPrice.includes(d) && maxPrice.includes(d)
            );
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
export const { getData,filterDataName, filterDataPrice, openFilter } = filterSlice.actions;
