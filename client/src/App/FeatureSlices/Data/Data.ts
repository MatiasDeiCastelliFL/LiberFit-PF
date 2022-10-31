import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arraySet from "../../utils/arraySet";

export interface filterState {
    data: any;
    locations: [];
    exercises: [];
    trainigns: [];
    products: any[];
    machines: [];
    filteredProducts: any[];
    dataByName: any;
}

const initialState: filterState = {
    data: ["data"],
    locations: [],
    products: [],
    filteredProducts: [],
    exercises: [],
    trainigns: [],
    machines: [],
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
            state.trainigns = action.payload[0].locations
                .map((d: any) => d.trainings)
                .flat();
            state.machines = action.payload[0].locations
                .map((d: any) => d.machines)
                .flat();
            state.dataByName = [].concat(
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
            state.filteredProducts = state.products.filter(
                (d) => minPrice.includes(d) && maxPrice.includes(d)
            );
        },
        filterDataName: (state, action: PayloadAction<any>) => {
            state.dataByName = [...state.dataByName]
                .map((d) => d.name)
                .filter((d) => d.toLowerCase().includes(action.payload))
                .flat();
            console.log(state.dataByName);
        },
        postData: (state, action: PayloadAction<any>) => {
            state;
        },
    },
});

export default dataSlice.reducer;
export const { filterDataName, getData, filterByPrice } = dataSlice.actions;
