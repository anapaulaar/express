const userService = require('../repository/user-repository')
const hashHelper = require('../helpers/hash')

module.exports = {
    create: (req, res) => {
        delete req.body.confirmacao
    
        req.body.senha = hashHelper.genHash(req.body.senha)
    
        userService.post(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(400).send(err))
    },
    get: (req, res) => {
        UserSchema.get()
        .then(data => res.json(data))
        .catch(err => res.status(400).send(err))
        
    }
}