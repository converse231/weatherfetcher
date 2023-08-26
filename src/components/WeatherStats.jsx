import { useSelector } from "react-redux";

function WeatherStats() {
  const reduxWeatherData = useSelector((state) => state.weather);

  if (!reduxWeatherData) {
    return (
      <div className="text-xl font-bold text-zinc-50">
        Please Start Searching
      </div>
    ); // Show loading indicator while fetching data
  }
  return (
    <div className="flex w-full gap-3 items-center justify-between mt-6">
      <div className="text-zinc-100 flex flex-col justify-center text-center">
        <p className="uppercase font-bold">Humidity</p>
        <p className="text-[2rem]">{reduxWeatherData.current.humidity}%</p>
      </div>

      <div className="text-zinc-100 flex flex-col justify-center items-center">
        <p className="uppercase font-bold">Precipitation</p>
        <p className="text-[2rem] uppercase">
          {reduxWeatherData.current.precipitation.type}
        </p>
      </div>
    </div>
  );
}

export default WeatherStats;
