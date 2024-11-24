// Function to fetch the user's location based on their IP address
export async function getUserLocation() {
    // Fetching the user's public IP address
    const url = "https://api.ipify.org?format=json";
    const unSortedData = await fetch(url, { method: "GET" });
    const data = await unSortedData.json();
    console.log(data.ip); // Logging the user's IP address to the console

    // Fetching the user's city using their IP address
    const cityUrl = `http://ip-api.com/json/${data.ip}?fields=city`;
    const unSortCityDataResponse = await fetch(cityUrl, { method: "GET" });
    const cityResponse = await unSortCityDataResponse.json();
    const nameOfCity = await cityResponse.city;
    console.log(nameOfCity); // Logging the user's city to the console
    return nameOfCity; // Returning the city name
}

// Function to fetch weather information for the user's location
export async function FetchWeatherInformation() {
    // Getting the user's city name
    const userCityName = await getUserLocation();
    // Setting the API key and URL for fetching weather data
    const apiKey = "key=a53808d8d6a140bab4b104656242211";
    const url = `https://api.weatherapi.com/v1/current.json?${apiKey}&q=${userCityName}`;
    // Fetching weather data from the API
    const unSortedData = await fetch(url, { method: "GET" });
    const data = await unSortedData.json();
    // Returning the parsed weather data
    return {
        cloud: data.current.cloud, // Cloud coverage
        feelsLike: data.current.feelslike_c, // Feels like temperature
        humidity: data.current.humidity, // Humidity percentage
        temp: data.current.temp_c, // Current temperature
        wind: data.current.wind_kph, // Wind speed in km/h
        cityName: userCityName // Name of the user's city
    };
}