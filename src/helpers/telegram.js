//local onde especifica o que o bot pode fazer
const bot = require('../infra/telegram')
bot.on("polling_error", console.log)

module.exports = {
    sendMessage: (chatId, message) => {
        bot.sendMessage(chatId, message);
    }
}