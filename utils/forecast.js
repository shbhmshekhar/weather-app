const request = require('request');

const forecast = (coordinates, callback) => {

    const latitude = coordinates.latitude;
    const longitude = coordinates.longitude;

    const url = `http://api.weatherstack.com/current?access_key=f7d7ef1f2763ec5d2ee728a3af67caa5&query=${latitude},${longitude}&units=m`

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error){
            callback('Unable to find location', undefined);
        }else{
            callback(undefined, {temperature: response.body.current.temperature, 
                feelsLike: response.body.current.feelslike, 
                rainProb: response.body.current.precip})
        }
    })
}

module.exports = forecast;