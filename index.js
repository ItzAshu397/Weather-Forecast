function showWeather() {
  let city = document.getElementById("input").value;
  const url = `https://api.weatherapi.com/v1/current.json?key=c8d2d2c8bb3146d4a35134220222910&q=${encodeURIComponent(
    city
  )}&aqi=no`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let weather = document.getElementById("weather");
      weather.innerHTML = `${data.location.name}'s Weather<br><br>Temperature: ${data.current.temp_c} C° or ${data.current.temp_f} F°<br>Wind Speed: ${data.current.wind_kph} kph or ${data.current.wind_mph} mph<br>Wind Degree: ${data.current.wind_degree}°<br>Humidity: ${data.current.humidity}%<br>Pressure: ${data.current.pressure_in} inches<br>Precipitation: ${data.current.precip_in} inches<br><br>${data.location.name}'s Location<br><br>State: ${data.location.region}<br>Country: ${data.location.country}<br>Latitude: ${data.location.lat}<br>Longitude: ${data.location.lon}<br>Date and Time: ${data.location.localtime}`;
    });
}
