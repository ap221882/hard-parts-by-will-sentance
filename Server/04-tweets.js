const fs = require("fs");

function cleanTweets(tweetsToClean) {
  //? code that removes bad Tweets
}

function useImportedTweets(errorData, data) {
  const cleanedTweetJson = cleanTweets(data);
  const tweetObj = JSON.parse(cleanedTweetJson);
  console.log(tweetObj.tweet2);
}

fs.readFile("./tweets.json", useImportedTweets);
