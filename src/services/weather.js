import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const placeApiKey = import.meta.env.VITE_PLACE_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ai-weather-by-meteosource.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "02f50024ddmshef2ffc2128639a2p1d6e68jsn92145ccf3f45"
      );
      headers.set(
        "X-RapidAPI-Host",
        "ai-weather-by-meteosource.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (params) =>
        `/current?lat=${String(params.lat)}&lon=${String(
          params.lon
        )}&timezone=auto&language=en&units=auto`,
    }),
  }),
});

export const { useLazyGetWeatherQuery } = weatherApi;
