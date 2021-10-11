const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f7d7ef1f2763ec5d2ee728a3af67caa5&query=12.9716,77.5946&units=m';

request({url: url, json: true}, (error, response) =>{
    //const data = JSON.parse(response.body)
    //console.log(response.body.current);
    console.log(`Following is the weather forecast for ${response.body.location.name} \n`);
    console.log('=========================================================\n');
    console.log(`${response.body.current.weather_descriptions[0]} Temperature is ${response.body.current.temperature}C and there is ${response.body.current.precip}% chance of rain and it feels like ${response.body.current.feelslike}C`);
} )