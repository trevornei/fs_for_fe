// First statements create variable that initialize the app.
//  require('http') --> specifies the protocol
// .   .createServer() --> method call that starts the server.
const express = require("express");
const server = require("http").createServer();
const app = express();
const path = require("path");
// Create a route for the app.
// At the root: responds with an index.html file.
app.get("/", function (req, res) {
  // __dirname is a reserved name in node for the directory that we are in right now.
  res.sendFile(path.join(__dirname, "index.html"));
});

server.on("request", app);
server.listen(3000, function () {
  console.log("listening on port 3000");
});

/*
Begin Websocket 
*/

// const websocketServer = require(ws).Server;
