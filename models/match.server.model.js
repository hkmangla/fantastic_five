var mongoose = require("mongoose"),
		Team = require("team.server.model.js"),
		matchSchema = new mongoose.Schema({
			team1 : {
				name : String,
				id : Number
			},
		team2 : {
			name : String,
			id : Number
		},

		bettingLeagues : [
			{
				type : mongoose.Schema.Types.ObjectId,
				ref  : "League"
			}
				
		],
		players : {
			team1 : [
				{
					name: String,
					id 	: Number
				}
			],
			team2 : [
				{
					name: String,
					id : Number
				}
			]

		},

		matchStatus : String,
		winner : String,
		date : Date,
		duration : String,
});

module.exports = mongoose.model("Match",matchSchema);