import { MutableRefObject, useRef, useState } from "react";
import MainPanel from "./components/MainPanel";
import SearchBar from "./components/SearchBar";
import fetchWeatherData from "./utility/fetchWeatherData";
import "./styles/App.scss";
import { Data } from "./interfaces/WeatherData";
import DayPanel from "./components/DayPanel";

function App() {
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.backgroundImage =
    "url('https://i.pinimg.com/originals/86/8b/48/868b48f0ec5b3d88216f4a484b880f59.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  const [data, setData] = useState<Data>();
  const [fetchable, canFetch] = useState(true);
  const cityRef = useRef() as MutableRefObject<HTMLInputElement>;

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    return fetchWeatherData(cityRef.current.value)
      .then((res) => {
        setData(res);
        canFetch(true);
      })
      .catch(() => canFetch(false));
  }

  console.log(data);

  return fetchable && data ? (
    <div className="container">
      <MainPanel fetchedData={data} />
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
      {!fetchable ? <h1 style={{ color: "white" }}>Failed to fetch</h1> : <></>}
      <SearchBar onSubmit={onSubmit} ref={cityRef} />
    </div>
  );
}

// TODO: make a modal error message appear in case fetchable is false (user can't fetch due to no internet connection, etc.)

export default App;
