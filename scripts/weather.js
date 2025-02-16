document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '70bb316b3db9755e517458c5073d1bf5'; // Your OpenWeatherMap API key
    const city = 'Lodwar';
    const weatherInfo = document.getElementById('weather-info');

    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(currentData => {
            const currentTemperature = Math.round(currentData.main.temp); // Round temperature to the nearest whole number
            const currentDescription = currentData.weather[0].description;
            const iconCode = currentData.weather[0].icon;

            // Determine the weather icon based on the condition
            let iconUrl;
            if (iconCode.includes('01')) {
                iconUrl = 'https://openweathermap.org/img/wn/01d@2x.png'; // Sunny
            } else if (iconCode.includes('09') || iconCode.includes('10')) {
                iconUrl = 'https://openweathermap.org/img/wn/09d@2x.png'; // Rainy
            } else if (iconCode.includes('04') || iconCode.includes('03') || iconCode.includes('02')) {
                iconUrl = 'https://openweathermap.org/img/wn/04d@2x.png'; // Cloudy
            } else {
                iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Default icon
            }

            // Fetch 5-day forecast data
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
                .then(response => response.json())
                .then(forecastData => {
                    // Extract the 3-day forecast
                    const dailyForecasts = [];
                    const forecastList = forecastData.list;

                    for (let i = 0; i < forecastList.length; i++) {
                        const forecast = forecastList[i];
                        const date = new Date(forecast.dt * 1000);
                        const day = date.toLocaleDateString('en-US', { weekday: 'short' });

                        // Only take one forecast per day (e.g., midday)
                        if (date.getHours() === 12) {
                            dailyForecasts.push({
                                day: day,
                                temp: Math.round(forecast.main.temp)
                            });

                            if (dailyForecasts.length === 3) break; // Stop after 3 days
                        }
                    }

                    // Update the weather info section
                    weatherInfo.innerHTML = `
                        <p>Current: ${currentTemperature}°C - ${currentDescription}</p>
                        <img src="${iconUrl}" alt="${currentDescription}" class="weather-icon">
                        <h3>3-Day Forecast:</h3>
                        <ul>
                            ${dailyForecasts.map(forecast => `<li>${forecast.day}: ${forecast.temp}°C</li>`).join('')}
                        </ul>
                    `;
                });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to load weather data.</p>';
        });
});
