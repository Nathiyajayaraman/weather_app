const request = require('request');

function forecast(long, lat, cb) {

  request(`http://api.weatherstack.com/current?access_key=e4fa7e5d5f49d900becf53be5d298b01&query=${long},${lat}`, 
  function (error, response, body) {
    console.error('error:', error);
    var obj = JSON.parse(body);
    cb(obj.current.weather_descriptions[0]);
      });
}

module.exports = forecast;