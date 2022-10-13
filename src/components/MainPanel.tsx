import displayNormalizedTime from "../hooks/displayNormalizedTime";
import "../styles/mainPanel.module.css";

export default function MainPanel({ fetchedData }: any) {
  function getFormattedTimeAndTimeZone(time: number) {
    const date = new Date(time * 1000);
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZoneName: "short",
    }).formatToParts(date);
    const timeZoneName = parts.find((p) => p.type === "timeZoneName")?.value; // Returns timezone abbreviation
    return `${displayNormalizedTime(
      date.getHours(),
      date.getMinutes()
    )}, ${timeZoneName}`;
  }

  return fetchedData !== null ? (
    <div className="panel main">
      <div className="title">
        <h1>{fetchedData.name}</h1>
        <span>
          as of{" "}
          {getFormattedTimeAndTimeZone(fetchedData.weatherData.current.dt)}
        </span>
      </div>
      <h3>Lat: {fetchedData.weatherData.lat}</h3>
      <h3>Lon: {fetchedData.weatherData.lon}</h3>
      <h3>Temperature: {fetchedData.weatherData.current.temp} °C</h3>
    </div>
  ) : (
    <></>
  );
}
