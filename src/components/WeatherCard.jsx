import React, { useState } from "react";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import windy_icon from "../assets/windy.png";
import sunny_icon from "../assets/sunny.png";
import rainy_icon from "../assets/rainy.png";
import thunderstorm_icon from "../assets/thunderstorm.png";
import rainy_sunny_icon from "../assets/rainy_sunny.png";

const WeatherCard = ({ weatherData, onSearch }) => {
  const [city, setCity] = useState("");

  const temp = weatherData?.main?.temp ?? "--";
  const location = weatherData?.name ?? "London";
  const humidity = weatherData?.main?.humidity ?? "--";
  const wind = weatherData?.wind?.speed
    ? (weatherData.wind.speed * 3.6).toFixed(1) // m/s -> km/h
    : "--";
  const error = weatherData?.error ?? "";

  const weatherCondition = weatherData?.weather?.[0]?.main ?? "Clear";
  const weatherIconMap = {
    Clear: sunny_icon,
    Rain: rainy_icon,
    Drizzle: rainy_icon,
    Thunderstorm: thunderstorm_icon,
    "Rain Sun": rainy_sunny_icon,
  };
  const weatherIcon = weatherIconMap[weatherCondition] || sunny_icon;

  return (
    <div
      style={{
        padding: "40px",
        borderRadius: "10px",
        backgroundImage: "linear-gradient(45deg, #2f4680, #500ae4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        width: "90%",
        boxSizing: "border-box",
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch?.(city)}
          style={{
            height: "50px",
            border: "none",
            outline: "none",
            borderRadius: "40px",
            paddingLeft: "25px",
            color: "#fff",
            background: "#3b3b3b",
            fontSize: "18px",
            flex: 1,
            "::placeholder": { color: "#ccc" },
          }}
        />
        <button
          onClick={() => onSearch?.(city)}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            background: "#3b3b3b",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img src={search_icon} alt="search" style={{ width: "26px", height: "26px" }} />
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div
          style={{
            backgroundColor: "#f8d7da",
            color: "#842029",
            padding: "8px 12px",
            borderRadius: "8px",
            width: "100%",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {error}
        </div>
      )}

      {/* Weather Icon & Temperature */}
      <img src={weatherIcon} alt={weatherCondition} style={{ width: "150px", margin: "30px 0" }} />
      <p style={{ color: "#fff", fontSize: "6vw", lineHeight: 1, fontWeight: "bold" }}>{temp}°C</p>
      <p style={{ color: "#fff", fontSize: "4vw", fontWeight: "500" }}>{location}</p>

      {/* Weather Details */}
      <div
        style={{
          width: "100%",
          marginTop: "40px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "22px" }}>
          <img src={humidity_icon} alt="humidity" style={{ width: "26px", marginTop: "10px" }} />
          <div>
            <p style={{ fontWeight: "600" }}>{humidity}%</p>
            <span style={{ display: "block", fontSize: "16px" }}>Humidity</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "22px" }}>
          <img src={windy_icon} alt="wind speed" style={{ width: "26px", marginTop: "10px" }} />
          <div>
            <p style={{ fontWeight: "600" }}>{wind} km/h</p>
            <span style={{ display: "block", fontSize: "16px" }}>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

