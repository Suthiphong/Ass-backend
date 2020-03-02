const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    keys: {type: Schema.Types.ObjectId, ref: 'transactions'}
})

const Users = mongoose.model('users', userSchema)

module.exports = Users