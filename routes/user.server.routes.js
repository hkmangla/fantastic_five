const controller = require('../controllers/user.server.controller');
const express = require('express');
var router = express.Router();

router.post('/', controller.save);

module.exports = router;