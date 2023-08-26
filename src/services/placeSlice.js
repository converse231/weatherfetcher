import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "place",
  initialState: null,
  reducers: {
    setPlaceData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPlaceData } = placeSlice.actions;

export default placeSlice.reducer;
