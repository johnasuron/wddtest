document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '70bb316b3db9755e517458c5073d1bf5'; // Your OpenWeatherMap API key
    const city = 'Lodwar';
    const weatherInfo = document.getElementById('weather-info');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp); // Round temperature to the nearest whole number
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;

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

            // Update the weather info section
            weatherInfo.innerHTML = `
                <p>${temperature}°C - ${description}</p>
                <img src="${iconUrl}" alt="${description}" class="weather-icon">
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to load weather data.</p>';
        });
});