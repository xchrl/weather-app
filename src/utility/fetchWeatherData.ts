import { Data } from "../interfaces/WeatherData";

export default async function fetchWeatherData(city: string): Promise<Data> {
  const geoData = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_API_KEY
    }`
  ).then((data) => data.json());
  let name, country, lat, lon;

  if (geoData && geoData.length != 0) {
    name = geoData[0].name;
    country = geoData[0].country;
    lon = geoData[0].lon;
    lat = geoData[0].lat;
  } else throw new Error("City does not exist");

  const weatherData = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_API_KEY
    }`
  )
    .then((data) => data.json())
    .catch((err) => console.error(err));

  return { city: name, country, weatherData };
}
