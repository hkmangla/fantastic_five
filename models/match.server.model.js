var mongoose = require("mongoose"),
		Team = require("team.server.model.js"),
		matchSchema = new mongoose.Schema({
			team1 : [
				type : mongoose.Schema.Types.ObjectId,
				ref  : "Team"
		],
		team2 : [
				type : mongoose.Schema.Types.ObjectId,
				ref  : "Team"
		],

		bettingLeagues : [
				type : mongoose.Schema.Types.ObjectId,
				ref  : "League"
		],

		matchStatus : String,
		winner : String,
		date : Date,
		duration : String,
});

module.exports = mongoose.model("Match",matchSchema);