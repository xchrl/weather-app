import { Daily } from "../../interfaces/WeatherData";
import "../../styles/panel.scss";
import getCurrentDayOfTheWeek from "../../utility/getCurrentDayOfTheWeek";
import getMonth from "../../utility/getMonth";
import styles from "./dayPanel.module.scss";
import convertIcons from "../../utility/convertIcons";
import getCountry from "../../utility/getCountry";

interface Props {
  day: number;
  data: Daily;
  city: string;
  country: string;
}

export default function DayPanel(props: Props) {
  const date = new Date(props.data.dt * 1000);
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(date.getDay());

  const reactIcon = convertIcons(props.data.weather[0].icon.slice(0, 2));

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
        <h2>{props.data.temp.day}°</h2>
        <span className="primary important description">
          {props.data.weather[0].description}
        </span>
      </main>
      <footer>
        <p className="secondary important">
          {props.city}, {getCountry(props.country)}
        </p>
      </footer>
    </div>
  );
}
