const UserSchema = require('../models/user')

module.exports = {
    post: (user) => {
        return UserSchema.findOne({email: user.email})
    }
}