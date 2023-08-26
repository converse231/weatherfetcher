import SearchBar from "./SearchBar";
import WeatherIcon from "./WeatherIcon";
import WeatherStats from "./WeatherStats";

function WeatherCard() {
  return (
    <div className="h-fit w-80 bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-md flex flex-col items-center gap-2">
      <SearchBar />
      <WeatherIcon />
      <WeatherStats />
    </div>
  );
}

export default WeatherCard;
