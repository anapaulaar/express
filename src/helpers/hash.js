const bcrypt = require('bcrypt')
const config = require('../config')

module.exports = {
    //encriptar
    genHash: (field) => {
        return bcrypt.hashSync(field, config.saltRounds)
    },
    compareHash:(currentField, hash) => {
        return bcrypt.compareSync(currentField, hash)
    }
}