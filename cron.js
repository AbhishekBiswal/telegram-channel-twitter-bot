const config = require("./config");

const Telegram = require("telegraf/telegram");
const telegram = new Telegram(config.telegramBotToken, {});

const tweets = require("./tweets");

tweets.getLastTweetId(function (err, lastTweetId) {
	tweets.getRecentTweets(lastTweetId, function (err, urls) {
		var newLastTweetId = urls && urls.length > 0 ? urls[0].split("/")[5] : null;
		console.log(newLastTweetId);
		tweets.saveLastTweetId(newLastTweetId);
		urls.forEach(function (url) {
			telegram.sendMessage(config.channelUsername, url);
		});
	});
});