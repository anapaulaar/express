const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = {
    genToken: (user) => {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
                id: user._id,
                nome: user.nome,
                email: user.email
            }
        }, config.jwtSecretSenha)
    },
    verifyToken: (token) => {
        try {
            return jwt.verify(token, config.jwtSecretSenha)
        } catch (error) {
            return false
        }
    }
}