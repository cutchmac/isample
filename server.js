require('./env');

const
  express = require('express'),
  svc = express(),
  bodyParser = require('body-parser')
;

const SVC_NAME = process.env.SVC_NAME;
const SVC_PORT = process.env.SVC_PORT;


/** Server Configuration **/
svc.use(bodyParser.json({limit: '5mb'}));
svc.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
svc.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

svc.get('/status', (req, res) => {
  res.status(200).send(`${SVC_NAME} Service running on http://${SVC_NAME}:${SVC_PORT}`);
});

/** Application **/
const api = require('./api');

svc.use('/api', api.router);

svc.listen(SVC_PORT);