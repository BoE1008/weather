import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Sunny, Rainy, Cloudy, Snowy, SunShower, Thunder } from "./Components";
import ReactAnimatedWeather from "react-animated-weather";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { ReactSkycon, SkyconType } from "react-skycons-extended";

const defaults = {
  icon: "RAIN",
  color: "goldenrod",
  size: 128,
  animate: true,
};
function App() {
  // const [weather, setWeather] = useState("");
  // useEffect(() => {
  //   const getWeather = async () => {
  //     const { data } = await axios.get(
  //       "https://geoapi.qweather.com/v2/city/lookup?location=洛杉矶&key=b92b0cc470a4484c839e523893a27fbd"
  //     );
  //     const { data: dataWeather } = await axios.get(
  //       `https://devapi.qweather.com/v7/weather/now?location=${data.location[0].id}&key=b92b0cc470a4484c839e523893a27fbd`
  //     );
  //     setWeather(dataWeather.now.text);
  //   };
  //   getWeather();
  // }, []);

  return (
    <div className="App">
      <Sunny />
      <Rainy />
      <Cloudy />
      <Snowy />
      <SunShower />
      <Thunder />
      {/* <div>
        <ReactAnimatedWeather
          icon={"CLEAR_DAY"}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />

        <ReactAnimatedWeather
          icon={"CLEAR_NIGHT"}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"PARTLY_CLOUDY_DAY"}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"CLOUDY"}
          color={"#fff"}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"RAIN"}
          color={"#fff"}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"SNOW"}
          color={"#fff"}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"FOG"}
          color={"#fff"}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"WIND"}
          color={"#fff"}
          size={defaults.size}
          animate={defaults.animate}
        />
        <ReactAnimatedWeather
          icon={"SLEET"}
          color={"#fff"}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div> */}
      <div>
        <ReactSkycon
          icon={SkyconType.PARTLY_CLOUDY_DAY}
          color={{
            sun: "darkorange",
            light_cloud: "#00ffff",
          }}
          size={128}
          animate={true}
        />
        <ReactSkycon
          icon={SkyconType.THUNDER_RAIN}
          color={{
            dark_cloud: "#ffffff",
            thunder: "#00ffff",
          }}
          size={128}
          animate={true}
        />

        <ReactSkycon
          icon={SkyconType.RAIN}
          color={{
            cloud: "#ffffff",
            rain: "#00ffff",
          }}
          size={128}
          animate={true}
        />
        <ReactSkycon
          icon={SkyconType.SNOW}
          color={{
            cloud: "#ffffff",
            snow: "#00ffff",
          }}
          size={128}
          animate={true}
        />
        <ReactSkycon
          icon={SkyconType.FOG}
          color={{
            light_cloud: "#ffffff",
            fog: "#00ffff",
          }}
          size={128}
          animate={true}
        />
        <ReactSkycon
          icon={SkyconType.SLEET}
          color={{
            cloud: "#ffffff",
            sleet: "#00ffff",
          }}
          size={128}
          animate={true}
        />
        <ReactSkycon
          icon={SkyconType.HAIL}
          color={{
            cloud: "#ffffff",
            hail: "#00ffff",
          }}
          size={128}
          animate={true}
        />
        <ReactSkycon
          icon={SkyconType.WIND}
          color={{
            wind: "#ffffff",
            leaf: "#00ffff",
          }}
          size={128}
          animate={true}
        />
      </div>
      <div>{/* <Calendar value={new Date()} /> */}</div>
    </div>
  );
}

export default App;

// import ReactWeather, { useOpenWeather } from "react-open-weather";

// const App = () => {
//   const { data, isLoading, errorMessage } = useOpenWeather({
//     key: "56c15f60d7520667e92354c3a01dbdda",
//     lat: "39.85",
//     lon: "116.28",
//     lang: "zh_cn",
//     unit: "metric", // values are (metric, standard, imperial)
//   });
//   console.log(data);
//   return (
//     <ReactWeather
//       isLoading={isLoading}
//       errorMessage={errorMessage}
//       data={data}
//       lang="en"
//       locationLabel="北京"
//       unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
//       showForecast
//     />
//   );
// };

// export default App;
