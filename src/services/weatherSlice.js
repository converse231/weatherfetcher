import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: null,
  reducers: {
    setWeatherData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
