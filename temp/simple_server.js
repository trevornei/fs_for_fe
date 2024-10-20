// require http protocol
// built-in node library that allows us to make: requests && responses...
const http = require('http');

// require file system
const fs = require('fs');

// declare what port you will use...
// CONST variables should generally be all caps for readability.
const PORT = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    fs.createReadStream('index.html').pipe(res);
});
// Tell the server about the port.
server.listen(PORT);
console.log(`Your server started on port: ${PORT}`);