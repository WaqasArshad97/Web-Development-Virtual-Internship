document.addEventListener('DOMContentLoaded', function () {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const result = document.getElementById('result');

    searchBtn.addEventListener('click', searchWeather);

    function searchWeather() {
        const apiKey = '3778447bb7b14296a1161900241201';
        const city = cityInput.value;

        if (city) {
            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        result.textContent = 'City not found';
                    } else {
                        const temperature = data.current.temp_c;
                        const description = data.current.condition.text;
                        result.textContent = `Temperature: ${temperature}°C, Description: ${description}`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    result.textContent = 'Error fetching weather data';
                });
        } else {
            result.textContent = 'Please enter a city name';
        }
    }
});
