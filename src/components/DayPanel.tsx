import { Data } from "../interfaces/WeatherData";
import styles from "../styles/Panel.module.scss";
import getCurrentDayOfTheWeek from "../utility/getCurrentDayOfTheWeek";
import getMonth from "../utility/getMonth";
import "../styles/dayPanel.scss";
import convertIcons from "../utility/convertIcons";
import getCountry from "../utility/getCountry";

export default function DayPanel(props: { day: number; data: Data }) {
  const dayData = props.data.weatherData.daily[props.day];
  const date = new Date(dayData.dt * 1000);
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(date.getDay());

  let reactIcon = convertIcons(dayData.weather[0].icon.slice(0, 2));
  return (
    <div className={styles.panel + " dayPanel"} id={`day-${props.day}`}>
      <header>
        <span className="day-of-the-week">{dayOfTheWeek}</span>
        <h2 className="day">
          {day} {month}, {year}
        </h2>
      </header>
      <main>
        <span className="react-icon">{reactIcon}</span>
        <span className="current-temperature">{dayData.temp.day}°</span>
        <h2 className="description">{dayData.weather[0].description}</h2>
      </main>
      <footer>
        <span className="city-and-country">
          {props.data.name}, {getCountry(props.data.country)}
        </span>
      </footer>
    </div>
  );
}
