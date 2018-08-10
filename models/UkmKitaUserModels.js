const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const UserScheme = new Scheme({
    user_name: String,
    pass_user: String,
    email_user: String,
    addr_user: String
})

let UserModels = mongoose.model('user', UserScheme, 'user', true)
module.exports.UserModels = UserModels