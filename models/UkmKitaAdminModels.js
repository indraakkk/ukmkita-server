const mongoose = require('mongoose')
const Scheme = mongoose.Schema

// const CampusScheme = new Scheme({
//     name_campus: String,
//     addr_campus: String,
//     phone_campus: String,
//     site_campus: String,
//     city_campus: String

const AdminScheme = new Scheme({
    user_admin: String,
    pass_admin: String,
    email_admin: String
})

let AdminModels = mongoose.model('admin', AdminScheme, 'admin', true)
module.exports.AdminModels = AdminModels