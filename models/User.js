const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: String,
    club: String,
    meal: String,
    email: String,
    contact: String,
    gender: String,
    participation: String,
});
module.exports = mongoose.model('User', UserSchema);