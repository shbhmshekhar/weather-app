const request = require('request');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('Darbhanga', (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data)
    }
});

forecast({latitude: 26.16667, longitude: 85.9}, (error, data) => {
    console.log(error);
    console.log(data);
})