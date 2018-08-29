# Post New Tweets By A User to  A Telegram Channel
-

### What it does
- Fetches tweets every X minutes from the specified twitter user.
- Posts them to a Telegram Channel.

### Why
To make it easier for twitter accounts to have their own Telegram channel without writing a lot of code. Most of the config is in `config.js`.

### Uses
- Node.js
- npm:twitter
- npm:telegraf (Planning to extend on it, but it could have been done with the native Telegram wrapper)

### Required
- Telegram Bot Token (Use @BotFather Telegram Bot to create one)
- Twitter Consumer Token, Secret, Access Token & Secret.

### Steps
- Get the required Credentials and populate `config.js` (Use ENV vars if you want to, but through the config file)
- Create a Telegram Channel
- Add the bot you created in the first step to the Telegram Channel as an Administrator. (Don't try to add as user and promote, doesn't work that way)
- Set up a cron job to run `cron.js` every X minutes (Will update this with heroku setup)

### Why did you do it?
If someone tells you that to create a Telegram bot you have to use another bot with a name like `@BotFather`, you have to give it a try.
