import { API_KEY } from "../data/config.json";
import { Data } from "../interfaces/WeatherData";

export default async function fetchWeatherData(city: string): Promise<Data> {
  const geoData = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  const name = geoData[0].name;
  const country = geoData[0].country;
  const lon = geoData[0].lon;
  const lat = geoData[0].lat;

  const weatherData = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  return { name, country, weatherData };
}
