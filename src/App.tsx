import { SetStateAction, useState } from "react";
import MainPanel from "./components/MainPanel";
import SearchBar from "./components/SearchBar";
import fetchWeatherData from "./hooks/fetchWeatherData";

function App() {
  const [data, setData] = useState<any>(null);
  const [city, setCity] = useState("");

  function onChange(e: { target: { value: SetStateAction<string> } }) {
    return setCity(e.target.value);
  }

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    return fetchWeatherData(city).then((res) => setData(res));
  }

  return (
    <div className="container">
      <MainPanel fetchedData={data} />
      <SearchBar onSubmit={onSubmit} onChange={onChange} />
    </div>
  );
}

export default App;
