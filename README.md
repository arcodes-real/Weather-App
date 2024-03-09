
## Project Title
Weather Atlas - Your weather companion

## Assignment Overview
This weather application, has a quite attractive UI and streamlined UX. The application has 5 major components:
1) TopButtonBar
2) InputBar
3) TimeAndLocationSection
4) TemperatureAndDetailsSection
5) ForeCastSection

## Key Features
1) Dynamic Background :The background color dynamically changes based on a threshold temperature, indicating a blue background for cold weather locations and a yellowish-orange for hot weather locations.
2) Real-time Weather Updates: Get instant access to current weather conditions, including temperature, humidity, wind speed, and more.
3) Hourly and Daily Forecasts: Plan ahead with detailed hourly and daily forecasts, so you're always prepared for the changing weather.
4) Location-Based Forecasting: Receive personalized weather forecasts based on your current location or any city you choose, ensuring accurate and relevant information.
5) Customizable Units: Tailor the weather data to your preferences by choosing between metric or imperial units for temperature, wind speed, and more.
6) Sleek and User-Friendly Interface: Enjoy a modern and intuitive user interface designed for ease of use and quick access to essential weather information.
7) Beautiful Visualizations: Experience weather data come to life with stunning visualizations, including animated weather icons and dynamic backgrounds.

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



