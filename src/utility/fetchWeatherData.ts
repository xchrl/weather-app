import { API_KEY } from "../data/config.json";

interface Data {
  name: string;
  country: string;
  weatherData: Object;
}

export default async function fetchWeatherData(city: string): Promise<Data> {
  const geodata = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  const name = geodata[0].name;
  const country = geodata[0].country;
  const lat = geodata[0].lat;
  const lon = geodata[0].lon;

  const weatherData = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  return { name, country, weatherData };
}
