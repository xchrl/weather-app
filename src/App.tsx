import { MutableRefObject, useRef, useState } from "react";
import MainPanel from "./components/MainPanel/MainPanel";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchWeatherData from "./utility/fetchWeatherData";
import "./styles/App.scss";
import { Data } from "./interfaces/WeatherData";
import DayPanel from "./components/DayPanel/DayPanel";

function App() {
  const [data, setData] = useState<Data>();
  const [fetchable, setFetchable] = useState(true);
  const cityRef = useRef() as MutableRefObject<HTMLInputElement>;

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    return fetchWeatherData(cityRef.current.value)
      .then((res) => {
        setData(res);
        setFetchable(true);
      })
      .catch((error) => {
        setFetchable(false);
        console.error(error);
      });
  }

  return data ? (
    <div className="container">
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
    </div>
  ) : (
    <div className="container">
      {fetchable ? <></> : <h1 style={{ color: "white" }}>Failed to fetch</h1>}
      <SearchBar onSubmit={onSubmit} ref={cityRef} />
    </div>
  );
}

// TODO: make a modal error message appear in case fetchable is false (user can't fetch due to no internet connection, etc.)

export default App;
