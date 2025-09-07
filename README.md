# Weather Dashboard

A modern, responsive weather dashboard built with React, Vite, and `styled-components`. It fetches real-time weather data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and weather conditions for a searched city. The interface features a sleek gradient design, a search bar with a button, and accessibility enhancements. A test component is included for debugging and development purposes.

## Features
- **Real-Time Weather Data**: Displays temperature (°C), humidity (%), wind speed (km/h), and weather condition for any city using the OpenWeatherMap API.
- **Search Functionality**: Enter a city name and press Enter or click the search button to fetch weather data, with debounced requests to optimize performance.
- **Responsive Design**: Adapts to various screen sizes with a centered card layout and `#e2d4ff` background.
- **Styled Components**: Uses `styled-components` for modular, maintainable CSS, matching the original design with a gradient background (`#2f4680` to `#500ae4`).
- **Search Bar Alignment**: Search input and button both styled to a consistent `50px` height, with a `24x24` search icon.
- **Custom Positioning**: Weather icons and city names shifted slightly rightward (20px) for aesthetic centering.
- **Weather Icons**: Supports available icons (`sunny.png`, `rainy.png`, `thunderstorm.png`, `rainy_sunny.png`, `rainy.png` for mist), with cloud and snow conditions mapped to `clear` and `rain`.
- **Test Component**: Includes `TestWeatherCard` for simplified testing of weather data fetching and rendering.
- **Accessibility**: Includes `aria-label`, hidden labels, and `aria-live` for screen reader compatibility.
- **Error Handling**: Displays user-friendly error messages for invalid city names or API failures.
- **Persistence**: Saves the last searched city in `localStorage` for convenience.
- **Performance**: Uses `React.memo` and `useCallback` for optimized rendering, with `lodash.debounce` for search input.
- **Custom Font**: Uses Poppins font via Google Fonts for a polished look.

## Tech Stack
- **React**: Frontend library for building the UI.
- **Vite**: Fast build tool and development server.
- **Styled-Components**: For scoped, reusable CSS styling.
- **Lodash**: For debouncing search input.
- **OpenWeatherMap API**: Provides real-time weather data.
- **JavaScript**: Uses `.jsx` and `.js` files.
- **Node.js**: Runtime environment for development and build.

## Project Structure
my-weather-app/
├── src/
│   ├── assets/
│   │   ├── humidity.png
│   │   ├── rainy.png
│   │   ├── rainy_sunny.png
│   │   ├── search.png
│   │   ├── sunny.png
│   │   ├── thunderstorm.png
│   │   └── windy.png
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherCardStyles.js
│   │   ├── TestWeatherCard.jsx
│   │   └── TestWeatherCardStyles.js
│   ├── styles/
│   │   └── styles.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.js
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md



