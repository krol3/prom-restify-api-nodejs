/**
 * File: server.js
 * Description:
 * Author: Carol Valencia
 * Creation date: 17/11/2018
 */

var restify = require('restify');
var Prometheus = require('./metrics');

function respond(req, res, next) {
    res.send('hello '+ req.params.name);
}

var server = restify.createServer();
const port = 8080;

server.use(Prometheus.requestCounters);
server.use(Prometheus.responseCounters);

/**
 * Enable metrics endpoint
 */
Prometheus.injectMetricsRoute(server);

/**
 * Enable collection of default metrics
 */
Prometheus.startCollection();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});

