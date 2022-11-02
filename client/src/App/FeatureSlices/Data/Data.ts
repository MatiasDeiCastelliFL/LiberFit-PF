import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
  data: any;
}

const initialState: filterState = {
  data: [],
};

const dataSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    postData: (state, action: PayloadAction<any>) => {
      state
    }
  },
});

export default dataSlice.reducer;
export const { getData } = dataSlice.actions;
