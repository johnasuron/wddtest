// Function to toggle the mobile menu
function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('show');
}

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Lodwar&units=metric&appid=70bb316b3db9755e517458c5073d1bf5'); // Replace with your API key
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            document.getElementById('weather-data').innerHTML = '<p>Failed to load weather data</p>';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-data').innerHTML = '<p>Error loading weather data</p>';
    }
}

// Function to display weather data
function displayWeather(data) {
    const { main, weather } = data;
    const temperature = Math.round(main.temp);
    const description = weather[0].description;
    document.getElementById('weather-data').innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}

// Function to display the last modified date and time
function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
}

// Call the functions
fetchWeather();
displayLastModified();