document.getElementById('searchForm').addEventListener('submit', event => {
    event.preventDefault();
    const city = document.getElementById('cityInput').value.trim();
    fetchWeather(city).then(data => {
      if (data) {
        displayWeather(data);
        addToFavorites(city);
      }
    });
  });

  function fetchWeather(city) {
    const URL = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
   
      
  
    return fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.cod === 200) {
              clearError();
              return data;
            } else {
              throw new Error(data.message);
            }
          })
          .catch(error => {
            displayError('City not found. Please enter a valid city name.');
            console.error('Error fetching weather data:', error);
          });
      }

  }
