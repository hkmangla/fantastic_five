const express = require('express');
const router = express.Router();
const eventController = require("../controllers/event.server.controller");
		const { HLTV } = require('hltv');

router.get('/', eventController.getEvents);

module.exports = router;