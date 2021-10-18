const request = require('request');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('Bangalore', (error, data) => {
    if(error){
        return console.log(error);
    }
    console.log('data for :' ,data.location);
    forecast(data.latitude, data.longitude, (error, data) => {
        if(error){
           return console.log(error);
        }            
        console.log(data)
    })
});

