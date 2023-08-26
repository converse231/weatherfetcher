import { configureStore } from "@reduxjs/toolkit";
import { placeApi } from "./place";
import { weatherApi } from "./weather";
import weatherReducer from "./weatherSlice";
import placeReducer from "./placeSlice";

export const store = configureStore({
  reducer: {
    [placeApi.reducerPath]: placeApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    weather: weatherReducer,
    place: placeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(placeApi.middleware)
      .concat(weatherApi.middleware),
});
