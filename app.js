const request = require('request');
const yargs = require('yargs');

// const geocode = require('./geocode/geocode');
//
// const argv = yargs
// .options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
//
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   }else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

  // fb33040bfa183db0e7ea81a3374cfce0

request ({
  url: 'https://api.darksky.net/forecast/fb33040bfa183db0e7ea81a3374cfce0/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if (error){
    console.log('unable to connect to forecast servers');
  }else if (response.statusCode === 400){
    console.log('Unable to fetch error');
  }else if(response.statusCode === 200){
    console.log(body.currently.temperature);
  }
});
