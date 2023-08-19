const fs = require("fs");

let cleanedTweets = "";

function cleanTweets(tweetsToClean) {
  //> remove bad tweets here
}

function doOnNewBatch(data) {
  cleanedTweets += cleanTweets(data);
}

const accessTweetArchive = fs.createReadStream("./tweetsArchive.json");

//~* data event event on new batch
accessTweetArchive.on("data", doOnNewBatch);
