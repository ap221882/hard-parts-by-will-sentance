const http = require("node:http");

// console.log("http", http);

function doIncoming(incomingData, functionsToSetOutgoingData) {
  console.log("URL HIT!!!!🔥");

  functionsToSetOutgoingData.end("Welcome to my website!");
}

const server = http.createServer(doIncoming);
// console.log("server", server);

server.listen(9000);
