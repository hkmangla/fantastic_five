const {HLTV} = require('hltv');

module.exports.getEvents = function (req, resp) {
	console.log('yes');
	HLTV.getMatches().then( res => {
		console.log(res);
    resp.send(JSON.stringify(res));
	});
}