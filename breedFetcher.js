const request = require("request");

const searchTerm = process.argv.slice(2).join("");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`,
  function(error, response, body) {
    if (response) {
      const data = JSON.parse(body);
      console.log(data[0].description);
      if (data.length === 0) {
        console.log("Breed not found.");
      }
    }
    if (error) {
      console.log(error.message);
    }
  }
);
