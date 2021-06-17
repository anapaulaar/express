module.exports = (req, res, next) => {

    const {nome, email, senha, confirmacao} = req.body
    if (!nome || !email || !senha || !confirmacao) {
        res.status(400).send('Campos obrigatórios não informados')
        return
    }
    
    next()
}