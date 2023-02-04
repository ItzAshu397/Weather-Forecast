function showWeather() {
  let location = document.getElementById("location").value;
  let output = document.getElementById("output");

  if (!location) {
    output.innerHTML = "Please enter a location";
  } else {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      location
    )}/today?unitGroup=metric&include=current&key=your_api_key&contentType=json`;

    fetch(url)
      .then((res) => res.json())
      .then(
        (data) =>
          (output.innerHTML = `Location: ${data.resolvedAddress}<br>Latitude: ${data.latitude}<br>Longitude: ${data.longitude}<br>Timezone: ${data.timezone}<br>Date: ${data.days[0].datetime}<br>Temperature: ${data.currentConditions.temp} °C<br>Feels like: ${data.currentConditions.feelslike} °C<br>Humidity: ${data.currentConditions.humidity}%<br>Wind Speed: ${data.currentConditions.windspeed} km/h<br>Wind Direction: ${data.currentConditions.winddir}°<br>Conditions: ${data.currentConditions.conditions}<br>Sunrise Time: ${data.currentConditions.sunrise}<br>Sunset Time: ${data.currentConditions.sunset}`)
      )
      .catch((err) => {
        console.log(err);
        output.innerHTML = "Data not available for this location";
      });
  }
}
