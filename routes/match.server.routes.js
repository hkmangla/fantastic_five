const express = require('express');
const router = express.Router();
const matchController = require("../controllers/match.server.controller");
		const { HLTV } = require('hltv');

router.get('/', matchController.getMatches);
router.get('/:id',matchController.getMatch);

module.exports = router;