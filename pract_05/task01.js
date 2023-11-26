const http = require('http')
const fs = require('fs')
const config = require()

function handleGetRequest(req, res) {

}

const methodHandlers = {
    GET: handleGetRequest,
    POST: handlePostRequest
};

const server = http.createServer(function serverHandler(req, res) {
    const requestMethod = req.method.toUpperCase();

    const handler = methodHandlers[requestMethod] || notFoundHandler;
    handler(req, res);
});

server.listen(config.port, function(err) {
    if(err) {
        console.error(err);
        return;
    }

    console.log('Server is listening on: ' + config.port);
});