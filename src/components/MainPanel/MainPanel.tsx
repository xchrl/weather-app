import styles from "./mainPanel.module.scss";
import "../../styles/panel.scss";
import getCountry from "../../utility/getCountry";
import getFormattedTimeAndTimeZone from "../../utility/getFormattedTimeAndTimeZone";
import getCurrentDayOfTheWeek from "../../utility/getCurrentDayOfTheWeek";
import getMonth from "../../utility/getMonth";
import convertIcons from "../../utility/convertIcons";
import { Data } from "../../interfaces/WeatherData";

export default function MainPanel(props: { data: Data }) {
  const reactIcon = convertIcons(
    props.data.weatherData.current.weather[0].icon.slice(0, 2)
  );
  const description = props.data.weatherData.current.weather[0].description;

  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(date.getDay());

  return (
    <div className={`panel ${styles.mainPanel}`}>
      <header>
        <h2>
          {props.data.name}, {getCountry(props.data.country)}
        </h2>
        <p className={styles.time}>
          as of {getFormattedTimeAndTimeZone(props.data.weatherData.current.dt)}
        </p>
      </header>
      <main>
        <h1 className={styles.temperature}>
          <span className={styles.reactIcon}>{reactIcon} </span>
          <span className={styles.currentTemperature}>
            {props.data.weatherData.current.temp}°
          </span>
        </h1>
      </main>
      <footer>
        <h2 className={styles.description}>{description}</h2>
        <div className="temperatures">
          {/* Maybe add temperatures for day and night here */}
        </div>
        <div className={styles.date}>
          <span>{dayOfTheWeek}</span>
          <p>
            {day} {month}, {year}
          </p>
        </div>
      </footer>
    </div>
  );
}
