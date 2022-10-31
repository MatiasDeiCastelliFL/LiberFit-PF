import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arraySet from "../../utils/arraySet";

export interface filterState {
  data: any,
  locations:[],
  exercises:[],
  products:any[],
  filteredProducts:any[],
}

const initialState: filterState = {
  data: ["data"],
  locations: [],
  products: [],
  filteredProducts: [],
  exercises: [],
};

const dataSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.locations = action.payload[0].locations;
      state.products = arraySet(action.payload[0].locations.map((d: { products: any; }) => d.products).flat());
      state.exercises = action.payload[0].exercises;
      state.filteredProducts = state.products;
    },
    filterByPrice: (state, action: PayloadAction<any>) => {
      console.log(action.payload[0], action.payload[1]);
      let minPrice = [...state.products].filter((d) => d.price >= action.payload[0]);
      let maxPrice = [...state.products].filter((d) => d.price <= action.payload[1]);
      state.filteredProducts = state.products.filter((d) => minPrice.includes(d) && maxPrice.includes(d))

      
    },
    postData: (state, action: PayloadAction<any>) => {
      state
    }
  },
});

export default dataSlice.reducer;
export const { getData, filterByPrice } = dataSlice.actions;
