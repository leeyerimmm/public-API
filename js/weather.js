const currentGeoFn = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const APIKey = 'e11f3fe55846300dbcf46508a4ad1699';

  console.log(`Latitude: ${lat}, Longitude: ${lon}`);

  (async function() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      // 도시 이름
      const $city = document.querySelector('.weather .city');
      $city.textContent = data.name;

      // 현재 날씨
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const $weatherTemp = document.querySelector('.weather .current-weather h4');
      $weatherTemp.textContent = `${temp}°C`;
      const $weatherConditions = document.querySelector('.weather .current-weather h5');
      $weatherConditions.textContent = `${weather}`;
      const weatherImg = document.querySelector('.weather .weather-icon');
      const imgSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const imgAlt = data.weather[0].description;
      weatherImg.setAttribute('src', imgSrc);
      weatherImg.setAttribute('alt', imgAlt);
      weatherImg.setAttribute('title', imgAlt);

      // 바람
      const windSpeed = data.wind.speed;
      const windDeg = data.wind.deg;
      const $windSpeed = document.querySelector('.wind .wind-speed');
      $windSpeed.textContent = `${windSpeed} m/s, ${windDeg}°`;

      // 습도
      const humidity = data.main.humidity;
      const $humidity = document.querySelector('.humidity .humidity-value');
      $humidity.textContent = `Humidity: ${humidity}%`;

      // 강수량
      const precipitation = data.rain ? data.rain["1h"] : 0;
      const $precipitation = document.querySelector('.precipitation .precipitation-value');
      $precipitation.textContent = `Precipitation: ${precipitation} mm`;

      // 구름량
      const cloudiness = data.clouds.all;
      const $cloud = document.querySelector('.cloud .cloud-value');
      $cloud.textContent = `Cloudiness: ${cloudiness}%`;

      // 시간별 예보
      const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
      const hourlyResponse = await fetch(hourlyUrl);
      const hourlyData = await hourlyResponse.json();

      const $hourlyForecast = document.querySelector('.hourly-forecast');
      $hourlyForecast.innerHTML = ''; // 기존 데이터를 지우기 위해 초기화

      hourlyData.list.slice(0, 5).forEach(hour => {
        const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const temp = hour.main.temp;
        const icon = hour.weather[0].icon;
        const description = hour.weather[0].description;

        const hourlyDiv = document.createElement('div');
        hourlyDiv.classList.add('hourly');
        hourlyDiv.innerHTML = `
          <h4>${time}</h4>
          <h4>${temp}°C</h4>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" title="${description}" class="weather-icon">
        `;
        $hourlyForecast.appendChild(hourlyDiv);
      });

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  })();
};

const errGeoFn = () => {
  alert('브라우저가 GPS 위치정보 기능을 지원하지 않습니다.');
};

navigator.geolocation.getCurrentPosition(currentGeoFn, errGeoFn);
