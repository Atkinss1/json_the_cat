const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2);
const API = 'https://api.thecatapi.com/v1/breeds/search?q=';
const catSearch = API.concat(url);

request(catSearch, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log("There was an error with the API: ", error);
  }
  data.length === 0 ? console.log('The details on that cat breed is unavailable.') : console.log(data[0].description);
});