const request = require("request");

const fetchBreedDescription = (searchTerm, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`,
    function (error, body) {
      if (error) {
        callback(error, null);
      }
      const data = JSON.parse(body.body);
      callback(null, data[0].description); // (error, desc)
    }
  );
};

module.exports = { fetchBreedDescription };
