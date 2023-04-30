import { Data } from "../../interfaces/WeatherData";
import "../../styles/panel.scss";
import getCurrentDayOfTheWeek from "../../utility/getCurrentDayOfTheWeek";
import getMonth from "../../utility/getMonth";
import styles from "./dayPanel.module.scss";
import convertIcons from "../../utility/convertIcons";
import getCountry from "../../utility/getCountry";

export default function DayPanel(props: { day: number; data: Data }) {
  const nextDayData = props.data.weatherData.daily[props.day];
  const date = new Date(nextDayData.dt * 1000);
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(date.getDay());

  const reactIcon = convertIcons(nextDayData.weather[0].icon.slice(0, 2));
  return (
    <div className={`panel ${styles.dayPanel}`} id={`day-${props.day}`}>
      <header>
        <span>{dayOfTheWeek}</span>
        <h2>
          {day} {month}, {year}
        </h2>
      </header>
      <main>
        <span className={styles.reactIcon}>{reactIcon}</span>
        <span className={styles.currentTemperature}>
          {nextDayData.temp.day}°
        </span>
        <h2 className={styles.description}>
          {nextDayData.weather[0].description}
        </h2>
      </main>
      <footer>
        <span>
          {props.data.name}, {getCountry(props.data.country)}
        </span>
      </footer>
    </div>
  );
}
