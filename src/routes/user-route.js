const userController = require('../controllers/user-controller')
const requiredFieldsToCreateUser = require('../middlewares/fields-to-create-middleware')
const checkEqualPassword = require('../middlewares/equal-password-middleware')

module.exports = app => {
    app.post('/create-account', requiredFieldsToCreateUser, checkEqualPassword, userController.create)
    
    app.get('/user', userController.get)
}