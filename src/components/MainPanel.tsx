import { useEffect, useState } from "react";
import fetchWeatherData from "../hooks/fetchWeatherData";

export default function MainPanel() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchWeatherData("Przemysl").then((res) => setData(res));
  }, []);

  const items = data.map((item, index) => {
    return (
      <div className="container" key={index}>
        <h1>City: {item.name}</h1>
        <h3>Lat: {item.lat}</h3>
        <h3>Lon: {item.lon}</h3>
      </div>
    );
  });

  return <>{items}</>;
}
