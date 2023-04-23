import "../styles/mainPanel.scss";
import styles from "../styles/Panel.module.scss";
import getCountry from "../utility/getCountry";
import getFormattedTimeAndTimeZone from "../utility/getFormattedTimeAndTimeZone";
import getCurrentDayOfTheWeek from "../utility/getCurrentDayOfTheWeek";
import getMonth from "../utility/getMonth";
import convertIcons from "../utility/convertIcons";
import { Data } from "../interfaces/WeatherData";

export default function MainPanel(props: { fetchedData: Data }) {
  let reactIcon, description;
  if (props.fetchedData !== undefined) {
    description = props.fetchedData.weatherData.current.weather[0].description;
    reactIcon = convertIcons(
      props.fetchedData.weatherData.current.weather[0].icon.slice(0, 2)
    );
  }

  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(date.getDay());
  console.log(props.fetchedData);

  return props.fetchedData !== undefined ? (
    <div className={styles.panel} id="main">
      <header>
        <h2 className="city-and-country">
          {props.fetchedData.name}, {getCountry(props.fetchedData.country)}
        </h2>
        <p className="time">
          as of{" "}
          {getFormattedTimeAndTimeZone(
            props.fetchedData.weatherData.current.dt
          )}
        </p>
      </header>
      <main>
        <h1 className="temperature">
          <span className="react-icon">{reactIcon} </span>
          <span className="current-temperature">
            {props.fetchedData.weatherData.current.temp}°
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
