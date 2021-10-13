const request = require('request');


// const URL = 'http://api.weatherstack.com/current?access_key=f7d7ef1f2763ec5d2ee728a3af67caa5&query=12.9716,77.5946&units=m';

// request({url: URL, json: true}, (error, response) =>{

//     if(error){
//         console.log('Unable to connect to weather service')
//     } else if(response.body.error){
//         console.log('Unable to find location');
//     }else{
//         //const data = JSON.parse(response.body)
//         //console.log(response.body.current);
//         console.log(`Following is the weather forecast for ${response.body.location.name} \n`);
//         console.log('=========================================================\n');
//         console.log(`${response.body.current.weather_descriptions[0]} Temperature is ${response.body.current.temperature}C and there is ${response.body.current.precip}% chance of rain and it feels like ${response.body.current.feelslike}C`);
//     }
    
// } )



//     const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic2hiaG1zaGVraGFyIiwiYSI6ImNrdW1sbXlidjFya2sydm96dWNyZjRsamoifQ.t4xUuL7X9EAkpLaiCRxXpA&limit=1`;

//     request({url: geoCodeURL, json: true}, (error, response)=> {

//         if(error){
//             console.log('Unable to connect to Geolocation service')
//         }else if(response.body.features.length === 0){
//             console.log('Unable to find the given location')
//         } else {
//             const latitude = response.body.features[0].center[1];
//             const longitude = response.body.features[0].center[0];

//             getWeather(latitude, longitude);

//             console.log(latitude, longitude);
//         }
        
//     })

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hiaG1zaGVraGFyIiwiYSI6ImNrdW1sbXlidjFya2sydm96dWNyZjRsamoifQ.t4xUuL7X9EAkpLaiCRxXpA&limit=1`;

    request({url: url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined);
        } else if(response.body.features.length === 0){
            callback('Unable to find given location', undefined);
        } else{
            callback(undefined, {latitude: response.body.features[0].center[1], 
                longitude: response.body.features[0].center[0], 
                location: })
        }
    })

}

geoCode('1234dd', (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data)
    }
})
