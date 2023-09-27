'use strict'
require('@babel/polyfill');
require('@babel/register');

const app = require('../app').default;

var apiPort = process.Node_env || 2345;
var http = require('http');
var server = http.createServer(app);
server.listen(apiPort);

server.on('listening',() => {
    console.log("Server created successfully.listen port no:" +apiPort)
})