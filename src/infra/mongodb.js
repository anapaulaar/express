const mongoose  = require ('mongoose')
const config = require('../config')

module.exports = {
    connect: () => {
        mongoose.connect(config.mongoURL, config.mongoSetup)
        .then(() => {console.log('Banco Conectado')})
        .catch(() => {console.log('Banco não conectado')})
    }
}