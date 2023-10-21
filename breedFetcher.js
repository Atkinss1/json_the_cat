const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  
  const API = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const catSearch = API.concat(breedName);
  
  request(catSearch, (error, response, body) => {
    const data = JSON.parse(body);
    if (response.statusCode > 400) {
      callback(`Error: status code ${response.statusCode}`, null);
    }
    if (error) {
      callback(error, null);
    }
    if (data.length === 0) {
      callback(null, `Error: ${breedName} was not found`);
    } else {
      callback(null, data[0].description);
    }
  });
};


module.exports = {
  fetchBreedDescription
};