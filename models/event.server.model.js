var mongoose = require("mongoose");

var EventSchema = new mongoose.Schema({
		title : String,
		location : String,
		startDate : Date,
		endDate : Date,
		mode : String,
		prize : String, 					//prize can be money or spots in a big event
		teamsAttending: [Team],
		matches : [
				type : mongoose.Schema.Types.ObjectId,
				ref  : "Match"
		]
});

module.exports = mongoose.model("Event", EventSchema);
