const express = require('express');
const router = express.Router();

/**
 * @param api API - API service class that manages the handling of requests
 *  depending on passed parameters and the internal message
 * @returns {*}
 */
module.exports = (api) => {

  router.post('/vendor/:label', (req, res) => {
    api.parseVendorRequest(req.params.label, req.body.message)
      .then(results => res.status(200).send(results))
      .catch(e => {
        let status = (e.status) ? e.status : 404;
        res.status(status).send(e)
      });
  });

  return router;
};
