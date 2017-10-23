var express = require('express');
var router = express.Router();

var messages = require('./services_pb');
var services = require('./services_grpc_pb');

var grpc = require('grpc');
var client = new services.ServiceClient('localhost:50051',
                                        grpc.credentials.createInsecure());

/* GET home page. */
router.get('/', function(req, res, next) {

  var request = new messages.BlankQuery();
  client.aPIVersion(request, function(err, response) {
    console.log('API ver: ', response.getBody());
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
