module.exports = {
	telegramBotToken: "", // From @BotFather
	channelUsername: "@kanyewesttweets", // Username of the Telegram Channel. New Tweets will be sent to this channel. Make sure the bot is added as an Admin to this channel.
	replies: {
		"help": "Hey there! Replace this with your help text.",
		"welcome": "Hey! Welcome to the @ bot"
	},
	twitter: {
		username: "wirddin", // Username of the twitter account from which we want to pull the tweets from. Without @
		consumerKey: "", // From dev.twitter.com
		consumerSecret: "", // From dev.twitter.com
		accessToken: "", // From dev.twitter.com
		accessSecret: "" // From dev.twitter.com
	}
};