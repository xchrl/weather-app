import "../styles/mainPanel.scss";
import styles from "../styles/Panel.module.scss";

import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudRain,
  FaSnowflake,
} from "react-icons/fa";
import { BsCloudFog, BsCloudLightningRainFill } from "react-icons/bs";

import getCountry from "../functions/getCountry";
import getFormattedTimeAndTimeZone from "../functions/getFormattedTimeAndTimeZone";
import getCurrentDayOfTheWeek from "../functions/getCurrentDayOfTheWeek";
import getMonth from "../functions/getMonth";

export default function MainPanel({ fetchedData }: any) {
  // Converts OpenWeatherMap icons to FontAwesome and Bootstrap icons
  // Also defines description for the current weather status
  let reactIcon, description;
  if (fetchedData !== undefined) {
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

  return fetchedData !== undefined ? (
    <div className={styles.panel} id="main">
      <header>
        <h2 className="city-and-country">
          {fetchedData.name}, {getCountry(fetchedData.country)}
        </h2>
        <p className="time">
          as of{" "}
          {getFormattedTimeAndTimeZone(fetchedData.weatherData.current.dt)}
        </p>
      </header>
      <main>
        <h1 className="temperature">
          <span className="react-icon">{reactIcon} </span>
          <span className="current-temperature">
            {fetchedData.weatherData.current.temp}°
          </span>
        </h1>
      </main>
      <footer>
        <h2 className="description">{description}</h2>
        <div className="temperatures">
          {/* Maybe add temperatures for day and night here */}
        </div>
        <div className="date">
          <span className="day-of-the-week">{dayOfTheWeek}</span>
          <p className="date">
            {day} {month}, {year}
          </p>
        </div>
      </footer>
    </div>
  ) : (
    <></>
  );
}
