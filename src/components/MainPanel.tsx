import { useEffect, useState } from "react";
import fetchWeatherData from "../hooks/fetchWeatherData";

export default function MainPanel() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchWeatherData("Przemysl").then((res) => setData(res));
  }, []);

  // const items = data.map((item, index) => {
  //   return (
  //     <div className="container" key={index}>
  //       <h3>Lat: {item.lat}</h3>
  //       <h3>Lon: {item.lon}</h3>
  //     </div>
  //   );
  // });

  // Method above uses the .map function to map specific object values to elements.

  if (data === null) return <h1>Loading data...</h1>;
  return (
    <>
      <h1>City: {data.name}</h1>
      <h3>Lat: {data.weatherData.lat}</h3>
      <h3>Lon: {data.weatherData.lon}</h3>
      <h3>Temperature: {data.weatherData.current.temp} °C</h3>
    </>
  );
}
