const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  
  const API = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const catSearch = API.concat(breedName);
  
  request(catSearch, (error, _response, body) => {
    const data = JSON.parse(body);
    if (error || data.length === 0) {
      callback(undefined);
    } else {
      callback(error, data[0].description);
    }
  });
};


module.exports = {
  fetchBreedDescription
};