const VerifyToken = require('../helpers/jwt')

module.exports = (req, res, next) => {

    const token = req.headers.authorization
    
    if (!token) {
        res.status(401).send('Token não infomado')
    }

    const validUser = VerifyToken.verifyToken(token)

    if (validUser) {
        Object.assign(req.body, {userId: validUser.data.id})
        Object.assign(req.headers, {userPayload: validUser.data})
        next()
        return
    }

    res.status(401).send('Token inválido')
}