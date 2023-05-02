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
      <header className="secondary">
        <p>{dayOfTheWeek}</p>
        <p className="important">
          {day} {month}, {year}
        </p>
      </header>
      <main>
        <span className={styles.reactIcon}>{reactIcon}</span>
        <h2>
          {nextDayData.temp.day}°
        </h2>
        <span className={`primary important ${styles.description}`}>
          {nextDayData.weather[0].description}
        </span>
      </main>
      <footer>
        <p className="secondary important">
          {props.data.name}, {getCountry(props.data.country)}
        </p>
      </footer>
    </div>
  );
}
