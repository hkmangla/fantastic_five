const UserModel = require('../models/user.server.model');

module.exports.save = (req, res) => {
    let user = new UserModel({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    UserModel.add(user, (err, data) => {
        if(err) {
            res.json({success: false, message: `Fail to create
                    new List. Error: ${err}`});
        } else {
            res.json({success: true, message: 'Added successfully!'});
        }
    });
}