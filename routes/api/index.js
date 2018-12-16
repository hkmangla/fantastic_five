const express = require('express'),
      router = express.Router();

router.use('/users', require('./user.server.routes'));

module.exports = router;