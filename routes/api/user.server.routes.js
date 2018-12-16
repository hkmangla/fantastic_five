const express = require('express');
const passport = require('passport');
const auth = require('../auth');
const router = express.Router();
const mongoose = require('mongoose');

const Users = mongoose.model('Users');

router.post('/', auth.optional, (req, res, next) => {
    const {body: {user}} = req;

    if (!user.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            }
        })
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            }
        })
    }

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then( () => res.json({ user: finalUser.toAuthJSON() }));
});

router.get('/current', auth.required, (req, res, next) => {
    console.log(req.payload);
    const { payload: { id }} = req;

    return Users.findById(id)
        .then((user) => {
            if(!user) {
                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });
        });
});


module.exports = router;