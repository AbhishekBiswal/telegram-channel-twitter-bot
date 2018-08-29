const Telegraf = require("telegraf");
const config = require("./config");

const bot = new Telegraf(config.telegramBotToken);

/*
	This file is just there to check the app. The tweets cron job will still run without this process being active. This is just a listener. You can remove this file.
*/

bot.start((ctx) => {
	ctx.reply(config.replies.welcome);
});
bot.help((ctx) => ctx.reply(config.replies.help));

bot.startPolling();