function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function displayTemperatureAndCity(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;

  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "21b4c3ea35c50f8b3156odtae63b894e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperatureAndCity);
}

let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", searchCity);
