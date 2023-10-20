const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  const API = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const catSearch = API.concat(breedName);
  
  request(catSearch, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      console.log(null, error);
    }
    data.length === 0 ? console.log(null) : console.log(data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};