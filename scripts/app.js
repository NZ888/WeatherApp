// Importing FetchWeatherInformation function from the api.js file
import { FetchWeatherInformation } from './api.js';

// Asynchronous function to fetch and display weather data
async function weather() {
    // Fetching weather data from the API
    const weatherData = await FetchWeatherInformation();
    console.log(weatherData); // Logging the weather data to the console

    // Updating the DOM with fetched weather data
    maxTemp.textContent = `${Math.ceil(weatherData.temp)}°`; // Setting maximum temperature
    sity.textContent = `${weatherData.cityName}`; // Setting city name
    humidity.textContent = `${weatherData.humidity}%`; // Setting humidity percentage
    cloudy.textContent = `${weatherData.cloud}%`; // Setting cloud coverage percentage
    wind.textContent = `${weatherData.wind} km/h`; // Setting wind speed
    feelsLike.textContent = `${weatherData.feelsLike}°`; // Setting "feels like" temperature
}

// Selecting DOM elements to update with weather data
const maxTemp = document.querySelector('h1[data-graduce-text]');
weather(); // Calling the weather function to fetch and display data
const sity = document.querySelector('h3[data-city-information]');
const humidity = document.querySelector('p[data-humadity]');
const cloudy = document.querySelector('p[data-cloudy]');
const wind = document.querySelector('p[data-wind]');
const feelsLike = document.querySelector('p[data-feels-like-temp]');

// Function to format the current date and time
function formatDate() {
    // Arrays for days of the week and months
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Getting the current date and time
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Formatting hours to two digits
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Formatting minutes to two digits
    const dayName = days[now.getDay()]; // Getting the name of the current day
    const day = now.getDate(); // Getting the current day of the month
    const monthName = months[now.getMonth()]; // Getting the name of the current month
    const year = now.getFullYear().toString().slice(-2); // Getting the last two digits of the year

    // Returning the formatted date and time string
    return `${hours}:${minutes} - ${dayName}, ${day} ${monthName} ${year}`;
}

// Function to update the date and time on the webpage
function updateDateTime() {
    // Selecting the DOM element to update
    const dateTimeElement = document.querySelector('p[data-time-and-date]');
    if (dateTimeElement) {
        // Setting the content of the element to the formatted date and time
        dateTimeElement.textContent = formatDate();
    }
}

// Updating the date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial update when the page loads