import { useSelector } from "react-redux";
import defaultImage from "../assets/icons/1.png";
import Lottie from "lottie-react";
import animationData from "../assets/animation_llrk981f.json";

import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/5.png";
import icon6 from "../assets/icons/6.png";
import icon7 from "../assets/icons/7.png";
import icon8 from "../assets/icons/8.png";
import icon9 from "../assets/icons/9.png";
import icon10 from "../assets/icons/10.png";
import icon11 from "../assets/icons/11.png";
import icon12 from "../assets/icons/12.png";
import icon13 from "../assets/icons/13.png";
import icon14 from "../assets/icons/14.png";
import icon15 from "../assets/icons/15.png";
import icon16 from "../assets/icons/16.png";
import icon17 from "../assets/icons/17.png";
import icon18 from "../assets/icons/18.png";
import icon19 from "../assets/icons/19.png";
import icon20 from "../assets/icons/20.png";
import icon21 from "../assets/icons/21.png";
import icon22 from "../assets/icons/22.png";
import icon23 from "../assets/icons/23.png";
import icon24 from "../assets/icons/24.png";
import icon25 from "../assets/icons/25.png";
import icon26 from "../assets/icons/26.png";
import icon27 from "../assets/icons/27.png";
import icon28 from "../assets/icons/28.png";
import icon29 from "../assets/icons/29.png";
import icon30 from "../assets/icons/30.png";
import icon31 from "../assets/icons/31.png";
import icon32 from "../assets/icons/32.png";
import icon33 from "../assets/icons/33.png";
import icon34 from "../assets/icons/34.png";
import { useLazyGetWeatherQuery } from "../services/weather";

function WeatherIcon() {
  const [{ isFetching: isLoading }] = useLazyGetWeatherQuery();
  const reduxWeatherData = useSelector((state) => state.weather);
  const reduxPlaceData = useSelector((state) => state.place);

  const animationStyle = {
    width: "600px",
    height: "auto",
    color: "white", // Change this to the desired color
  };

  if (!reduxWeatherData || !reduxPlaceData || isLoading)
    return (
      <div className="flex w-full justify-center items-center">
        <Lottie animationData={animationData} style={animationStyle} />
      </div>
    );

  const iconImages = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4,
    5: icon5,
    6: icon6,
    7: icon7,
    8: icon8,
    9: icon9,
    10: icon10,
    11: icon11,
    12: icon12,
    13: icon13,
    14: icon14,
    15: icon15,
    16: icon16,
    17: icon17,
    18: icon18,
    19: icon19,
    20: icon20,
    21: icon21,
    22: icon22,
    23: icon23,
    24: icon24,
    25: icon25,
    26: icon26,
    27: icon27,
    28: icon28,
    29: icon29,
    30: icon30,
    31: icon31,
    32: icon32,
    33: icon33,
    34: icon34,
    // ... map other icon numbers to their images
  };

  const imageSrc = reduxWeatherData
    ? iconImages[reduxWeatherData.current.icon_num]
    : defaultImage;

  return (
    <div className="w-full flex flex-col justify-center items-center h-full relative ">
      {reduxWeatherData && (
        <>
          <img
            src={imageSrc}
            alt={reduxWeatherData.current.icon}
            className="w-[5rem] mt-5"
          />
          <p className="text-zinc-50 text-6xl text-bold">
            {reduxWeatherData.current.temperature}°c
          </p>

          <p className="text-zinc-50 text-xl text-bold">
            {reduxWeatherData.current.summary}
          </p>
          <p className="text-zinc-50 text-base mt-2 text-center">
            {reduxPlaceData.name} / {reduxPlaceData.country}
          </p>
        </>
      )}
    </div>
  );
}

export default WeatherIcon;
