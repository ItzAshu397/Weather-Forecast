function showWeather() {
  let location = document.getElementById("location").value;
  let output = document.getElementById("output");

  if (!location) {
    output.innerHTML = "Please enter a location";
  } else {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      location
    )}/today?unitGroup=metric&include=current&key=2WQD3KTT2UGM668DRP3XW2U77&contentType=json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        output.innerHTML = "";

        document.getElementById(
          "temperature"
        ).innerText = `${data.currentConditions.temp} °C`;
        document.getElementById(
          "feels-like"
        ).innerText = `${data.currentConditions.feelslike} °C`;
        document.getElementById(
          "humidity"
        ).innerText = `${data.currentConditions.humidity}%`;
        document.getElementById(
          "wind-speed"
        ).innerText = `${data.currentConditions.windspeed} km/h`;
        document.getElementById(
          "wind-direction"
        ).innerText = `${data.currentConditions.winddir}°`;
        document.getElementById("condition").innerText =
          data.currentConditions.conditions;
        document.getElementById("sunrise").innerText =
          data.currentConditions.sunrise;
        document.getElementById("sunset").innerText =
          data.currentConditions.sunset;
        document.getElementById("timezone").innerText = data.timezone;
        document.getElementById("date").innerText = data.days[0].datetime;

        output.innerHTML = `<strong>Location:</strong> ${data.resolvedAddress}`;
      })
      .catch((err) => {
        console.log(err);
        output.innerHTML = "Data not available for this location";
      });
  }
}
