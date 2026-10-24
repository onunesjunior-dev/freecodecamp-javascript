const getWeatherBtn = document.getElementById('get-weather-btn');
const citySelect = document.getElementById('city-select') || document.querySelector('select');

let getWeather = async (city) => {
  try {
    const cityMap = {
      'nova york': 'new york',
      'londres': 'london',
      'tóquio': 'tokyo',
      'toquio': 'tokyo'
    };
    const queryCity = cityMap[city?.toLowerCase()] || city;
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(queryCity)}`);
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

let showWeather = async (city) => {
  try {
    const data = await getWeather(city);
    if (!data) {
      alert('Something went wrong, please try again later.');
      return;
    }

    const weatherIcon = document.getElementById('weather-icon');
    const mainTemp = document.getElementById('main-temperature');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const windGust = document.getElementById('wind-gust');
    const weatherMain = document.getElementById('weather-main');
    const location = document.getElementById('location');

    if (weatherIcon) {
      weatherIcon.src = data.weather?.[0]?.icon !== undefined ? data.weather[0].icon : 'N/A';
      weatherIcon.alt = data.weather?.[0]?.description !== undefined ? data.weather[0].description : 'N/A';
    }
    if (mainTemp) {
      mainTemp.textContent = data.main?.temp !== undefined ? `${data.main.temp}` : 'N/A';
    }
    if (feelsLike) {
      feelsLike.textContent = data.main?.feels_like !== undefined ? `${data.main.feels_like}` : 'N/A';
    }
    if (humidity) {
      humidity.textContent = data.main?.humidity !== undefined ? `${data.main.humidity}` : 'N/A';
    }
    if (wind) {
      wind.textContent = data.wind?.speed !== undefined ? `${data.wind.speed}` : 'N/A';
    }
    if (windGust) {
      windGust.textContent = data.wind?.gust !== undefined ? `${data.wind.gust}` : 'N/A';
    }
    if (weatherMain) {
      weatherMain.textContent = data.weather?.[0]?.main !== undefined ? `${data.weather[0].main}` : 'N/A';
    }
    if (location) {
      location.textContent = data.name !== undefined ? `${data.name}` : 'N/A';
    }
  } catch (error) {
    alert('Something went wrong, please try again later.');
  }
};

if (getWeatherBtn) {
  getWeatherBtn.addEventListener('click', () => {
    const selectedCity = citySelect?.value;
    if (!selectedCity) {
      return;
    }
    showWeather(selectedCity);
  });
}
