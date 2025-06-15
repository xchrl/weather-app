import styles from "./mainPanel.module.scss";
import "../../styles/panel.scss";
import getCountry from "../../utility/getCountry";
import getFormattedTimeAndTimeZone from "../../utility/getFormattedTimeAndTimeZone";
import getCurrentDayOfTheWeek from "../../utility/getCurrentDayOfTheWeek";
import getMonth from "../../utility/getMonth";
import convertIcons from "../../utility/convertIcons";
import { Current } from "../../interfaces/WeatherData";

interface Props {
  data: Current;
  city: string;
  country: string;
}

export default function MainPanel(props: Props) {
  const reactIcon = convertIcons(props.data.weather[0].icon.slice(0, 2));
  const description = props.data.weather[0].description;

  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const dayOfTheWeek = getCurrentDayOfTheWeek(date.getDay());

  return (
    <div className={`panel ${styles.mainPanel}`}>
      <header>
        <h2>
          {props.city}, {getCountry(props.country)}
        </h2>
        <p className={`secondary ${styles.time}`}>
          as of {getFormattedTimeAndTimeZone(props.data.dt)}
        </p>
      </header>
      <main>
        <span className={styles.reactIcon}>{reactIcon} </span>
        <h2 className="inline">{props.data.temp}°</h2>
      </main>
      <footer>
        <h2 className="description">{description}</h2>
        <div className="temperatures">
          {/* Maybe add temperatures for day and night here */}
        </div>
        <div className={`secondary ${styles.date}`}>
          <p>{dayOfTheWeek}</p>
          <p>
            {day} {month}, {year}
          </p>
        </div>
      </footer>
    </div>
  );
}
