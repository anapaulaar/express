module.exports = (req, res, next) => {

    const {title} = req.body
    if (!title) {
        res.status(400).send('Campos Titulo é obrigatório')
        return
    }
    next()

}