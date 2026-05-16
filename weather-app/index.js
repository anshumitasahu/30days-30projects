let cityInput = document.getElementById('city-input');
let searchBtn = document.getElementById('search-btn');
let weatherForecast = document.getElementById('weather-forecast');
let humidity = document.getElementById('humidity-info');
let windSpeed = document.getElementById('wind-speed-info');
searchBtn.addEventListener('click', function () {
  let city = cityInput.value;
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27ad6357b871f1223b214c91cff81d57&units=metric`)
      .then(response => response.json())
      .then(data => {
        weatherForecast.innerHTML = `
        <div class="weather-card">
          <div class="image-container"></div>
          <div class="weather-box">
            <h1>${data.main.temp} °C</h1>
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
          </div>
        </div>
        `;
        humidity.innerHTML = `${data.main.humidity}%`; 
        windSpeed.innerHTML = `${data.wind.speed} m/s`;
        // console.log(data);
      })
      .catch(error => {
        weatherForecast.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
      });
  } else {
    weatherForecast.innerHTML = `<p>Please enter a city name.</p>`;
  }
  weatherForecast.style.color = 'white';
  cityInput.value = '';
});