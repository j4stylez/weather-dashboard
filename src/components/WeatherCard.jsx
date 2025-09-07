import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/styles";
import {
  WeatherCardContainer,
  SearchBarContainer,
  Input,
  Button,
  ErrorMessage,
  Temperature,
  Location,
  DetailsContainer,
  Detail,
  LoadingSpinner,
  WeatherIcon,
  DetailIcon,
  SearchIcon,
} from "./WeatherCardStyles";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/windy.png";
import sunny_icon from "../assets/sunny.png";
import rainy_icon from "../assets/rainy.png";
import thunderstorm_icon from "../assets/thunderstorm.png";
import rainy_sunny_icon from "../assets/rainy_sunny.png";
import mist_icon from "../assets/rainy.png";

const normalizeWeatherCondition = (condition) => {
  if (!condition) {
    console.log("No weather condition provided, defaulting to 'clear'");
    return "clear";
  }
  const normalized = condition.toLowerCase();
  console.log("Weather condition from API:", condition, "Normalized:", normalized);
  if (normalized.includes("clear")) return "clear";
  if (normalized.includes("cloud")) return "clear"; // Map Clouds, Few Clouds, etc. to clear
  if (normalized.includes("rain")) return "rain";
  if (normalized.includes("drizzle")) return "drizzle";
  if (normalized.includes("thunder")) return "thunderstorm";
  if (normalized.includes("snow")) return "rain"; // Map Snow to rain
  if (normalized.includes("mist") || normalized.includes("fog")) return "mist";
  console.log("Unknown weather condition, using fallback:", normalized);
  return "clear";
};

const WeatherCard = ({ weatherData, onSearch, isLoading = false }) => {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [error, setError] = useState(weatherData?.error ?? "");

  const weatherIconMap = {
    clear: sunny_icon,
    rain: rainy_icon,
    drizzle: rainy_icon,
    thunderstorm: thunderstorm_icon,
    mist: mist_icon,
    "rain sun": rainy_sunny_icon,
  };

  const debouncedSearch = useCallback(
    debounce((city) => {
      if (city.trim()) onSearch?.(city);
    }, 500),
    [onSearch]
  );

  const handleSearch = useCallback(() => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setError("");
    debouncedSearch(city);
    localStorage.setItem("lastCity", city);
    setCity("");
  }, [city, debouncedSearch]);

  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return (
      <ThemeProvider theme={theme}>
        <WeatherCardContainer>
          <SearchBarContainer>
            <label htmlFor="city-input" style={{ display: "none" }}>
              Search city
            </label>
            <Input
              id="city-input"
              type="text"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch} aria-label="Search city weather">
              <SearchIcon src={search_icon} alt="Search icon" />
            </Button>
          </SearchBarContainer>
          {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
          {!error && <ErrorMessage>No weather data available</ErrorMessage>}
        </WeatherCardContainer>
      </ThemeProvider>
    );
  }

  const temp = weatherData.main?.temp ?? "--";
  const location = weatherData.name ?? "Unknown Location";
  const humidity = weatherData.main?.humidity ?? "--";
  const wind = weatherData.wind?.speed ? (weatherData.wind.speed * 3.6).toFixed(1) : "--";
  const weatherCondition = normalizeWeatherCondition(weatherData.weather?.[0]?.main);
  const weatherIcon = weatherIconMap[weatherCondition] || sunny_icon;
  console.log("Selected weather icon:", weatherIcon);

  return (
    <ThemeProvider theme={theme}>
      <WeatherCardContainer>
        <SearchBarContainer>
          <label htmlFor="city-input" style={{ display: "none" }}>
            Search city
          </label>
          <Input
            id="city-input"
            type="text"
            placeholder="Search city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button onClick={handleSearch} aria-label="Search city weather">
            <SearchIcon src={search_icon} alt="Search icon" />
          </Button>
        </SearchBarContainer>
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
        <div role="status" aria-live="polite">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <WeatherIcon src={weatherIcon} alt={`Current weather: ${weatherCondition}`} loading="lazy" />
              <Temperature>{temp === "--" ? temp : temp.toFixed(1)}°C</Temperature>
              <Location>{location}</Location>
              <DetailsContainer>
                <Detail>
                  <DetailIcon src={humidity_icon} alt="Humidity icon" />
                  <div>
                    <p>{humidity}%</p>
                    <span>Humidity</span>
                  </div>
                </Detail>
                <Detail>
                  <DetailIcon src={wind_icon} alt="Wind speed icon" />
                  <div>
                    <p>{wind} km/h</p>
                    <span>Wind Speed</span>
                  </div>
                </Detail>
              </DetailsContainer>
            </>
          )}
        </div>
      </WeatherCardContainer>
    </ThemeProvider>
  );
};

export default React.memo(WeatherCard);
