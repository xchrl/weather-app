import { SetStateAction, useState } from "react";
import MainPanel from "./components/MainPanel";
import SearchBar from "./components/SearchBar";
import fetchWeatherData from "./hooks/fetchWeatherData";
import "./styles/App.css";

function App() {
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.backgroundImage =
    "url('https://i.pinimg.com/originals/86/8b/48/868b48f0ec5b3d88216f4a484b880f59.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  const [data, setData] = useState<any>(null);
  const [city, setCity] = useState("");
  const [fetch, canFetch] = useState(true);

  function onChange(e: { target: { value: SetStateAction<string> } }) {
    return setCity(e.target.value);
  }

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    return fetchWeatherData(city)
      .then((res) => {
        setData(res);
        canFetch(true);
      })
      .catch(() => canFetch(false));
  }

  return fetch ? (
    <div className="container">
      <MainPanel fetchedData={data} />
      <SearchBar onSubmit={onSubmit} onChange={onChange} />
    </div>
  ) : (
    <div className="container">
      <h1 style={{ color: "white" }}>Failed to fetch</h1>
      <SearchBar onSubmit={onSubmit} onChange={onChange} />
    </div>
  );
}

export default App;
