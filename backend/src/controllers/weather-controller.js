'use strict';

var weather = require('../utils/weather/weather-api');

exports.get = (req, res, next) => {
    if (req.query.weather1 && req.query.weather2 && req.query.weather3) {
        let city1 = [];
        let city2 = [];
        let city3 = [];

        getWeather(req.query.weather1)
            .then(data => {
                city1.push(data.cod, data)
            }).then(
                getWeather(req.query.weather2)
                    .then(data => {
                        city2.push(data.cod, data)
                    }).then(
                        getWeather(req.query.weather3)
                            .then(data => {
                                city3.push(data.cod, data)
                            }).then(() => {
                                if (city1[0] === 200 && city2[0] == 200 && city3[0] == 200) {
                                    res.status(200).send({
                                        [capitalize(req.query.weather1)]:
                                            [{
                                                "weatherC": convertToCelsius(city1[1].main.temp),
                                                "sunrise": convertTimestampToHour(city1[1].sys.sunrise),
                                                "sunset": convertTimestampToHour(city1[1].sys.sunset)
                                            }],
                                        [capitalize(req.query.weather2)]:
                                            [{
                                                "weatherC": convertToCelsius(city2[1].main.temp),
                                                "sunrise": convertTimestampToHour(city2[1].sys.sunrise),
                                                "sunset": convertTimestampToHour(city2[1].sys.sunset)
                                            }],
                                        [capitalize(req.query.weather3)]:
                                            [{
                                                "weatherC": convertToCelsius(city3[1].main.temp),
                                                "sunrise": convertTimestampToHour(city3[1].sys.sunrise),
                                                "sunset": convertTimestampToHour(city3[1].sys.sunset)
                                            }]
                                    })
                                }
                                else {
                                    res.status(404).send({
                                        'error': 'BAD REQUEST'
                                    })
                                }
                            })
                    )
            )
    }
    else {
        res.status(400).send({
            "message": "You must introduce 3 cities to proceed the request"
        })
    }
}

function getWeather(city) {
    weather.city = city;
    return weather.getCurrentWeather();
}

function convertToCelsius(tempF) {
    return (
        Math.round(
            ((tempF - 32) * (5 / 9))
        )
    )
}

function convertTimestampToHour(timestamp) {
    var hours = new Date(timestamp * 1000);
    var hours_string = hours.toLocaleString()
    var hours_string_parsed = hours_string.split(" ")[1];

    return hours_string_parsed
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}