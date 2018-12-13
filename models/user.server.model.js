var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String
});

const UserModel = module.exports = mongoose.model('users', userSchema);

module.exports.add = (user, callback) => {
    user.save(callback);
}