import "../styles/mainPanel.module.css";

import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudRain,
  FaSnowflake,
} from "react-icons/fa";
import { BsCloudFog, BsCloudLightningRainFill } from "react-icons/bs";

import getCountry from "../hooks/getCountry";
import getFormattedTimeAndTimeZone from "../hooks/getFormattedTimeAndTimeZone";
import getCurrentDayOfTheWeek from "../hooks/getCurrentDayOfTheWeek";
import getMonth from "../hooks/getMonth";

export default function MainPanel({ fetchedData }: any) {
  // Converts OpenWeatherMap icons to FontAwesome and Bootstrap icons
  // Also defines description for the current weather status
  let reactIcon, description;
  if (fetchedData !== null) {
    description = fetchedData.weatherData.current.weather[0].description;
    const ICON = fetchedData.weatherData.current.weather[0].icon.slice(0, 2);
    switch (ICON) {
      case "01":
        reactIcon = <FaSun />;
        break;
      case "02":
        reactIcon = <FaCloudSun />;
        break;
      case "03":
      case "04":
        reactIcon = <FaCloud />;
        break;
      case "09":
        reactIcon = <FaCloudShowersHeavy />;
        break;
      case "10":
        reactIcon = <FaCloudRain />;
        break;
      case "11":
        reactIcon = <BsCloudLightningRainFill />;
        break;
      case "13":
        reactIcon = <FaSnowflake />;
        break;
      case "14":
        reactIcon = <BsCloudFog />;
        break;
    }
  }

  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(new Date().getDay());

  return fetchedData !== null ? (
    <div className="panel main">
      <div className="title">
        <h2 className="inline">
          {fetchedData.name}, {getCountry(fetchedData.country)}
        </h2>{" "}
        <span className="time">
          as of{" "}
          {getFormattedTimeAndTimeZone(fetchedData.weatherData.current.dt)}
        </span>
      </div>
      <div className="status">
        <h1 className="temperature">
          {reactIcon} {fetchedData.weatherData.current.temp}°
        </h1>
        <h3>{description}</h3>
      </div>
      <div className="temperatures"></div>
      <div className="date">
        <span className="day-of-the-week">{dayOfTheWeek}</span>
        <span className="date">
          {day} {month}, {year}
        </span>
      </div>
    </div>
  ) : (
    <></>
  );
}
