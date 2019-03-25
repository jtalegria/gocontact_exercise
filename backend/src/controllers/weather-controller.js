'use strict';

var weather = require('../utils/weather/weather-api');

exports.get = (req, res, next) => {
    if (req.query.weather1 && req.query.weather2 && req.query.weather3) {
        let city1 = [];
        let city2 = [];
        let city3 = [];

        getWeather(req.query.weather1)
            .then(data => {
                city1.push(data.cod, data.main.temp)
            }).then(
                getWeather(req.query.weather2)
                    .then(data => {
                        city2.push(data.cod, data.main.temp)
                    }).then(
                        getWeather(req.query.weather3)
                            .then(data => {
                                city3.push(data.cod, data.main.temp)
                            }).then(() => {
                                if (city1[0] === 200 && city2[0] == 200 && city3[0] == 200) {
                                    res.status(200).send({
                                        [capitalize(req.query.weather1)]: [{ "weatherF": city1[1], "weatherC": convertToCelsius(city1[1]) }],
                                        [capitalize(req.query.weather2)]: [{ "weatherF": city2[1], "weatherC": convertToCelsius(city2[1]) }],
                                        [capitalize(req.query.weather3)]: [{ "weatherF": city3[1], "weatherC": convertToCelsius(city3[1]) }]
                                    })
                                }
                                else if (city1[0] == 400 || city2[0] == 400 || city3[0] == 400) {
                                    res.status(400).send({
                                        'error': data.message
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
}

function getWeather(city) {
    weather.city = city;
    return weather.getCurrentWeather();
}

function convertToCelsius(tempF) {
    return (
        parseFloat(
            ((tempF - 32) * (5 / 9)).toFixed(2)
        )
    )
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}