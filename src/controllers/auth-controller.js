const authService =  require('../repository/auth-repository')
const hashHelper = require('../helpers/hash')
const jwt = require('../helpers/jwt')

module.exports = {
    login: (req, res) => {
        authService.post(req.body)
        .then((data) => {
            if (!data) {
                res.status(404).send('Usuário não encontrato')
                return
            }

            const checkSenha = hashHelper.compareHash(req.body.senha, data.senha)

            if (!checkSenha) {
                res.status(401).send('Senha inválida')
                return
            }

            res.json({
                token: jwt.genToken(data)
            })

        })
        .catch(err => res.status(400).send(err))
    }

}