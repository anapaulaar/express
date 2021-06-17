const UserSchema = require('../models/user')
module.exports = {
    post: (data) => {
        return UserSchema.create(data)
    },
    get: () => {
        return UserSchema.find().select('nome email')
    },
    getOne: (fields = {}, select = '') => {
        return UserSchema.findOne(fields).select(select)
    }
}