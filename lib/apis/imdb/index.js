const imdb = require('imdb-api');

/**
 * @param message
 * @returns {Promise<any>|Promise<U>|Promise.<T>}
 * @todo probably should do some validation that the message itself matches proper params for the getReq
 */
function parseRequest(message){
  return imdb.getReq(message);
}

module.exports = {
  parseRequest
};