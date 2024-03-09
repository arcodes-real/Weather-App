
## Project Title
Weather Atlas - Your weather companion

## Assignment Overview
This weather application, has a quite attractive UI and streamlined UX. The application has 5 major components:
1) TopButtonBar
2) InputBar
3) TimeAndLocationSection
4) TemperatureAndDetailsSection
5) ForeCastSection
The application displays :
1) Realtime weather details(temp, local time, date, real feel, humidity, wind speed, Sunrise, Sunset, High, Low, weather conditions[Haze, Clear, Cloudy, Smoke, Rain etc], all in a very
   attractive UI.API
3) Hourly Forecasts
4) Daily Forecasts

## Key Features
1) The background color dynamically changes based on a threshold temperature, indicating a blue background for cold weather locations and a yellowish-orange for hot weather locations.
2) UI Icons show weather conditions, such as, Cloudy, Haze, Smoke, Clear, Rain etc
3) Enabled with Toast Alerts for better user experience

## How to run the application locally
1) Clone the repository
2) Install Dependencies(npm install)
3) Get your API Key from [https://openweathermap.org/] and add it to weatherService.js 'API_KEY' variable
4) Experience Weather Atlas! :)

## Tech Stack Used and Dependencies:
-> The application extensively uses JavaScript, ReactJS and Tailwind CSS
-> Dependencies : axios, luxon, react-toastify
-> axios is used for data fetching
-> luxon is a JS Library, used for working with dates and times( I have used it to format the date and time according to the place/location searched)
-> react-toastify is used to display toast alerts to users for better UX

## How to install
-> npm install axios
-> npm install luxon
-> npm install react-toastify

## Issues and Troubleshooting
If any city/location is not available in the API, the application will throw a toast alert guiding the user to return to main page

## Contact Information
Hope everything will work fine! InCase you find any trouble using/running the application, kindly contact at:
archis.datta3@gmail.com



