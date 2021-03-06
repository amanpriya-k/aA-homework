console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax( {
  url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
  type: 'GET',
  success(weatherData) {
    console.log(`Your weather data:`);
    console.log(`temperature: ${weatherData.main.temp}, humidity: ${weatherData.main.humidity}`);
    console.log(`description: ${weatherData.weather[0].description}`);
  }
});

// Add another console log here, outside your AJAX request
console.log("Finished AJAX request!");
