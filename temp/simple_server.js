// require http protocol
// built-in node library that allows us to make: requests && responses...
const http = require('http');

// require file system
const fs = require('fs');

// declare what port you will use...
// CONST variables should generally be all caps for readability.
const PORT = 3000;

// Every server has two components: 1. requests  2.responses
const server = http.createServer(function (req, res) {
    // 200 = status_code that we are sending back to the client.
    // The {object} tells the client in the packet head (being sent over the network to the browser) that the server is sending back html.
    res.writeHead(200, {'content-type':'text/html'});
    // .createReadStream() = node method
    //    A memory efficient way of reading data from a file. Essentially, the data is chunked in batches instead of being sent all at once.
    // .pipe() helps handle reading the data from the server and writing the data to the client/desintion.
    fs.createReadStream('index.html').pipe(res);
});
// Tell the server about the port.
server.listen(PORT);
console.log(`Your server started on port: ${PORT}`);
console.log(`Open this server instane here: localhost:${PORT}`)