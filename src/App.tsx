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
          <MainPanel data={data} />
          <SearchBar onSubmit={onSubmit} ref={cityRef} />
          <div className="days-container">
            <h1>5-day weather forecast</h1>
            <div className="days">
              <DayPanel day={1} data={data} />
              <DayPanel day={2} data={data} />
              <DayPanel day={3} data={data} />
              <DayPanel day={4} data={data} />
              <DayPanel day={5} data={data} />
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
