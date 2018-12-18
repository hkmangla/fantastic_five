const {HLTV} = require('hltv');

module.exports.getMatches = function (req, resp) {
	console.log('yes');
	HLTV.getMatches().then( res => {
		//console.log(res);
		// if(err)console.log(err);
		var resp2 = [];
		res.forEach(element => {
			var temp = { team1 : element.team1,
			team2 : element.team2,
			};
			resp2.push(temp);
		});
    resp.send(JSON.stringify(resp2));
	});
}
module.exports.getMatch = function (req, resp) {
    var id = req.params.id;
	HLTV.getMatch({id : id}).then( res => {
		//console.log(res);
	//if(err)console.log(err);
	var resp2 = {team1 : element.team1,
		team2 : element.team2,};
	
    resp.send(JSON.stringify(res));
	});
}