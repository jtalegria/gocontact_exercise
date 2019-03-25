let request = require('request-promise');

const config = require('../../config');
const weatherApiToken = config.weatherToken;


var weather = {
    city: null,
    getCurrentWeather: function () {
        return request({
            "method": "GET",
            "uri": `http://api.openweathermap.org/data/2.5/weather?q=${weather.city}&units=imperial&appid=${weatherApiToken}`,
            "json": true
        });
    }
}
module.exports = weather;