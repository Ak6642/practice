document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = '8ebf7af8206e19d2785949427060bdd0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weather = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather-result').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
        });
});
