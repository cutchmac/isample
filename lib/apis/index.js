/**
 * Vendor Api
 * Expose an api for requests that can handle vendor specific functionality
 * @typedef {Object} VendorApi
 * @method parseRequest
 */


const imdb = require('./imdb');

module.exports = {
  imdb
};