const request = require('request');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');
//const yargs = require('yargs');


const location = process.argv[2]

if(location){
    geoCode(location, (error, data) => {
        if(error){
            return console.log(error);
        }
        console.log('data for : ', data.location);
        forecast(data.latitude, data.longitude, (error, data) => {
            if(error){
               return console.log(error);
            }            
            console.log(data)
        })
    });
} else {
    console.log('Please provide a location for which forecast is required.')
}



