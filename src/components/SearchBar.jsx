import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLazyGetPlaceQuery } from "../services/place";
import { useLazyGetWeatherQuery } from "../services/weather";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../services/weatherSlice";
import { setPlaceData } from "../services/placeSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [place, setPlace] = useState("");

  const [getPlace, { isFetching }] = useLazyGetPlaceQuery();
  const [getWeather, { isFetching: isLoading }] = useLazyGetWeatherQuery(); // Use your weather API query hook here

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await getPlace({ placeName: place });

    if (data) {
      const curPlace = {
        lat: data[0].lat,
        lon: data[0].lon,
        placeId: data[0].place_id,
      };
      const placeData = data[0];
      dispatch(setPlaceData(placeData));

      const curLat = parseFloat(curPlace.lat);
      const curLon = parseFloat(curPlace.lon);
      const curLatSign = curPlace.lat.endsWith("N") ? 1 : -1;
      const curLonSign = curPlace.lon.endsWith("E") ? 1 : -1;

      const finalLat = curLat * curLatSign;
      const finalLon = curLon * curLonSign;

      const weatherResponse = await getWeather({
        lat: finalLat,
        lon: finalLon,
      });

      if (weatherResponse.data) {
        const weatherData = weatherResponse.data;
        dispatch(setWeatherData(weatherData));
      }
    }
  }

  return (
    <form
      className="flex items-center gap-3 bg-zinc-50 rounded-full px-5 w-full"
      onSubmit={handleSubmit}
    >
      <input
        className="placeholder:italic placeholder:text-slate-400 block  w-full py-2 pl-2 focus:outline-none bg-transparent  sm:text-sm"
        placeholder="Search for city..."
        type="text"
        name="search"
        disabled={isFetching || isLoading}
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <button className="bg-color" type="submit">
        <FiSearch className="text-zinc-600 text-2xl" />
      </button>
    </form>
  );
}

export default SearchBar;
