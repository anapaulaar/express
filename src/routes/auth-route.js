const requiredFieldsToLogin = require('./../middlewares/fields-to-login-middleware')
const authController = require('../controllers/auth-controller')

module.exports = app => {
    app.post('/login', requiredFieldsToLogin, authController.login)
}