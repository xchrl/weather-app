import { useRef, useState } from "react";
import MainPanel from "./components/MainPanel";
import SearchBar from "./components/SearchBar";
import fetchWeatherData from "./functions/fetchWeatherData";
import "./styles/App.scss";

function App() {
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.backgroundImage =
    "url('https://i.pinimg.com/originals/86/8b/48/868b48f0ec5b3d88216f4a484b880f59.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  const [data, setData] = useState<any>(null);
  const [fetch, canFetch] = useState(true);
  const cityRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    return fetchWeatherData(cityRef.current.value)
      .then((res) => {
        setData(res);
        canFetch(true);
      })
      .catch(() => canFetch(false));
  }

  return fetch ? (
    <div className="container">
      <MainPanel fetchedData={data} />
      <SearchBar onSubmit={onSubmit} ref={cityRef} />
    </div>
  ) : (
    <div className="container">
      <h1 style={{ color: "white" }}>Failed to fetch</h1>
      <SearchBar onSubmit={onSubmit} ref={cityRef} />
    </div>
  );
}

export default App;
