//global variables
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'e80a21913ec0a12015733c7bd52e62b8';

//timezones
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function renderForecastCard(forecast, timezone) {
  //vars from api
  var unixTs = forecast.dt;
  var iconUrl = 'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
  var iconDescription = forecast.weather[0].description;
  var tempF = forecast.temp.day;
  var { humidity } = forecast;
  var windMph = forecast.wind_speed;

  // elements creation
  var col = document.createElement('div');
  var card = document.createElement('div');
  var cardBody = document.createElement('div');
  var cardTitle = document.createElement('h5');
  var weatherIcon = document.createElement('img');
  var tempEl = document.createElement('p');
  var windEl = document.createElement('p');
  var humidityEl = document.createElement('p');
}