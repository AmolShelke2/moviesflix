"use strict";

const api_key = "af43eee7096ce58d62b8fbfd7bf013ca";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/*

Fetch data from a server using the `url` and passes
The Result in JSON data to a callback function
Along with an optional parameter if has `optionParam`.
*/

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
