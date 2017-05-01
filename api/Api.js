const vendorApis = require('@lib/apis');

/**
 * Vendor API Access Exception Handler
 * @param {string} message
 * @param {object} e
 */
function VendorApiAccessExceptionHandler(message, e) {
  this.message = message;
  this.e = e;
  if(e.status) this.status = e.status;
  this.name = "VendorApiAccessExceptionHandler";
}

/**
 * API
 * Expose an api for requests that can handle vendor specific or normal api request
 * @class
 * @typedef {Object} API
 * @method parseVendorRequest
 * @todo Add ability to handle normal api requests for the future app that dont query vendor apis
 */
class API {

  parseVendorRequest (label, requestMessage){
    return new Promise((resolve, reject) => {
      // based on the label validate the library exists
      if( ! vendorApis[label]){
        reject(new VendorApiAccessExceptionHandler("Invalid Vendor API Route Request", {status: 400}));
      }

      /** {VendorApi} **/
      const vendorApi = vendorApis[label];

      vendorApi.parseRequest(requestMessage)
        .then(resolve)
        .catch(e => reject(new VendorApiAccessExceptionHandler("Invalid Vendor API Route Request", e)));

    });
  }
}



module.exports = API;