const http = require("http");

const tweets = ["😍", "🫣", "💀", "Hey"];

function doIncoming(incomingData, functionsToSetOutgoingData) {
  console.log("URL HIT!!!!🔥");
  const tweetNeeded = incomingData.url.slice(1, -1);
  console.log("tweetNeeded", tweetNeeded);

  functionsToSetOutgoingData.end(tweets[tweetNeeded]);
}

const server = http.createServer(doIncoming);
// console.log("server", server);

server.listen(9000);
