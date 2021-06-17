module.exports = (req, res, next) => {
    //desestruturação 
    const {email, senha} = req.body
    if (!email || !senha) {
        res.status(400).send('Campos obrigatórios não informados')
        return
    }

    next()
}