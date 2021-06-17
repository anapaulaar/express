const bot = require('../infra/telegram')

module.exports = {
    listtask: (cb) => {
        return bot.onText(/\/listtask/, (msg) => {
            cb(msg)
        })
    },
    savetask: (cb) => {
        bot.onText(/\/savetask/, (msg) => {
            cb(msg)
        })
    }
}