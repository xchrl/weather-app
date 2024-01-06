import { MutableRefObject, useRef, useState } from "react";
import MainPanel from "./components/MainPanel/MainPanel";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchWeatherData from "./utility/fetchWeatherData";
import "./styles/App.scss";
import { Data } from "./interfaces/WeatherData";
import DayPanel from "./components/DayPanel/DayPanel";
import fetchRandomImage from "./utility/fetchRandomImage";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";
import { FetchInfo } from "./interfaces/FetchInfo";

function App() {
  const [data, setData] = useState<Data>();
  const [fetchInfo, setFetchInfo] = useState<FetchInfo>({ fetchable: true });
  const cityRef = useRef() as MutableRefObject<HTMLInputElement>;

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setFetchInfo({ fetchable: true });

    const value = cityRef.current.value;

    fetchWeatherData(value)
      .then((res) => setData(res))
      .catch((error) => {
        console.error(error);
        setFetchInfo({
          fetchable: false,
          errorMessage:
            "Can't fetch data. User has no internet connection, the API doesn't work or the city does not exist.",
        });
      });

    fetchRandomImage(value)
      .then((url) => {
        document.documentElement.style.backgroundImage = `url("${url}")`;
      })
      .catch((error) => {
        console.error(error);
        setFetchInfo({
          fetchable: false,
          errorMessage:
            "Can't fetch image. This could be due to the API not being able to find any image for the city.",
        });
      });
  }

  return (
    <div className="container">
      {data ? (
        <>
          <MainPanel
            data={data.weatherData.current}
            city={data.city}
            country={data.country}
          />
          <SearchBar onSubmit={onSubmit} ref={cityRef} />
          <div className="days-container">
            <h1>5-day weather forecast</h1>
            <div className="days">
              {data.weatherData.daily
                .filter((_, index) => index > 0 && index <= 5)
                /* index > 0, so that it doesn't show data for today
                index <= 5, so that it doesn't go through days after 5 days */
                .map((day, index) => (
                  <DayPanel
                    day={index + 1} // + 1, because id's show the number of the day after today (tomorrow: 'day-1', 2 days: 'day-2' and so on)
                    data={day}
                    city={data.city}
                    country={data.country}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <SearchBar onSubmit={onSubmit} ref={cityRef} />
      )}
      {fetchInfo.fetchable ? null : ( // Check for errors
        <ErrorPopup errorMessage={fetchInfo.errorMessage} />
      )}
    </div>
  );
}

export default App;
