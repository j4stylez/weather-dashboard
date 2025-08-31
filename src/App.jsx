// src/App.jsx
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/WeatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London"); // default city

  // Fetch default city weather on mount
  useEffect(() => {
    handleSearch(city);
  }, []);

  // Function to fetch weather
  const handleSearch = async (searchCity) => {
    if (!searchCity) return;

    const data = await fetchWeather(searchCity);
    setWeatherData(data);
  };

  return (
    <div className="app">
      <WeatherCard weatherData={weatherData} onSearch={handleSearch} />
    </div>
  );
}

export default App;


