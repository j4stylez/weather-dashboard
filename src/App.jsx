import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        setWeatherData({ error: data.message || "City not found" });
      }
    } catch (error) {
      setWeatherData({ error: "Failed to fetch weather data" });
    } finally {
      setIsLoading(false);
    }
  };

  return <WeatherCard weatherData={weatherData} onSearch={fetchWeather} isLoading={isLoading} />;
};

export default App;



