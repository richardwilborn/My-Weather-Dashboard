var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=bd3ba241aca40d4970e34ff6dd13e4b0&units=imperial')
    .then(response => response.json())
    .then(data => { console.log(data)
      var nameValue = data.name;
      var tempValue = data.main.temp;
      var descValue = data.weather[0].description;
      var humidityValue = data.main.humidity 
      var windValue = data.wind.speed
    
      city.innerHTML =nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
      humidity.innerHTML = humidityValue;
      wind.innerHTML = windValue;
    })
 
 .catch(err => alert("Wrong city name!"))
})