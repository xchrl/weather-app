import { API_KEY } from "../data/config.json";

export default async function fetchWeatherData(city: string) {
  const geodata = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return await geodata;
}
