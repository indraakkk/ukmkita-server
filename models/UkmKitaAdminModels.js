const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const AdminScheme = new Scheme({
    user_admin: String,
    pass_admin: String,
    email_admin: String
})

let AdminModels = mongoose.model('admin', AdminScheme, 'admin', true)
module.exports.AdminModels = AdminModels