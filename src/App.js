import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Sunny, Rainy, Cloudy, Snowy, SunShower, Thunder } from "./Components";
// import ReactAnimatedWeather from "react-animated-weather";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { ReactSkycon, SkyconType } from "react-skycons-extended";

import { Calendar } from "antd";

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

  const handlePanelChange = (date, mode) => {
    console.log(date);
    console.log(mode);
  };

  const handleSelect = (date) => {
    console.log(date);
  };

  return (
    <div className="App">
      <Sunny />
      <Rainy />
      <Cloudy />
      <Snowy />
      <SunShower />
      <Thunder />
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
            leaf: "darkorange",
          }}
          size={128}
          animate={true}
        />
      </div>
      <div>{/* <Calendar value={new Date()} /> */}</div>
      <div className="site-calendar-demo-card">
        <Calendar
          fullscreen={false}
          onPanelChange={handlePanelChange}
          onSelect={handleSelect}
        />
      </div>
      {/* <div style={{ color: "white", fontSize: "50px" }}>{weather}</div> */}
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
