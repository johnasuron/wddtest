// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with your API key and location (Trier, Germany)
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=70bb316b3db9755e517458c5073d1bf5';

// Fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayResults(data); // Display results
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display weather data
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

// Call the function to fetch and display weather data
apiFetch();