// services/WeatherService.js

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Fetch weather data for a given city from OpenWeatherMap
 * @param {string} city - Name of the city
 * @returns {Promise<object>} - Weather data or error object
 */
export const fetchWeather = async (city) => {
  if (!city) return { error: "City name is required" };

  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    if (response.ok) {
      return data; // returns weather data object
    } else {
      return { error: data.message || "City not found" }; // handle invalid city
    }
  } catch (err) {
    return { error: "Network error. Please try again." }; // handle network errors
  }
};
