const { createServer } = require("http");

function doOnIncoming(incomingData, functionsToSetOutgoingData) {
  throw new Error("");
  functionsToSetOutgoingData.end("Welcome to Twitter!");
}

function doOnError(errInfo) {
  console.error("Error: " + errInfo);
}

const server = createServer();

server.on("request", doOnIncoming);
server.on("error", doOnError);

server.listen(9000);
