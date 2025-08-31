# Weather Dashboard

A responsive, interactive Weather Dashboard built with **React** and **Tailwind CSS** that allows users to search for real-time weather information for cities around the world.

This project fetches data from the **OpenWeatherMap API** and displays temperature, humidity, wind speed, and weather conditions in an intuitive card layout.

---

## 🔗 Demo

You can view the live application here: [Your Deployed Link]  

---

## 🛠 Features

- **City Search**: Users can search for any city worldwide.
- **Current Weather Data**: Displays:
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather condition with icon
- **Responsive Design**: Works well on desktop, tablet, and mobile devices.
- **Error Handling**: Displays user-friendly messages for invalid city names or API errors.
- **Live Updates**: Weather data updates automatically when a new city is searched.

---

## 🧰 Technologies Used

- **React** – Frontend library for building interactive UI components.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Vite** – Fast development build tool.
- **OpenWeatherMap API** – Weather data source.

---

## 📁 Project Structure

weather-dashboard/
│
├─ public/
│
├─ src/
│ ├─ assets/ # Images (weather icons, search icon, etc.)
│ ├─ components/
│ │ └─ WeatherCard.jsx
│ ├─ services/
│ │ └─ WeatherService.js
│ ├─ App.jsx
│ └─ index.css
│
├─ .env # API key
├─ package.json
└─ vite.config.js