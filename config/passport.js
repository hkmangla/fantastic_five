const mongoose = require('mongoose'),
      passport = require('passport'),
      LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
    usernameField: 'user[username]',
    passwordField: 'user[password]',
    }, (username, password, done) => {
        console.log(username, password);
        Users.findOne({username: username})
        .then((user) => {
            if (!user) return done(null, false, {message: "Incorrect username"});
            if (!user.validatePassword(password)) {
                return done(null, false, {message: "Incorrect password"});
            }

            return done(null, user);
        }).catch(done);
    }
));