const Api = require('./Api');
const router = require('./router');

module.exports = {
  router: router(new Api)
};