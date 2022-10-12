export default function MainPanel({ fetchedData }: any) {
  return fetchedData !== null ? (
    <>
      <h1>City: {fetchedData.name}</h1>
      <h3>Lat: {fetchedData.weatherData.lat}</h3>
      <h3>Lon: {fetchedData.weatherData.lon}</h3>
      <h3>Temperature: {fetchedData.weatherData.current.temp} °C</h3>
    </>
  ) : (
    <></>
  );
}
