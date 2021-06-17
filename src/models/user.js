const mongoose = require('mongoose')

const UserSchema = mongoose.Schema (
    {
        email:{
            type: String,
            unique: true,
            required: true
        },
        nome:{
            type: String,
            required: true
        },
        senha:{
            type: String,
            required: true
        },
        idTelegram:{
            type: String
        },
        status: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Users', UserSchema)