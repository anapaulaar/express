module.exports = (req, res, next) => {
    const {senha, confirmacao} = req.body

    senha !== confirmacao ? res.status(400).send('Senhas inválidas') : next ()
}