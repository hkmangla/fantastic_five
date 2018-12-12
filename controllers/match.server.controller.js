const {HLTV} = require('hltv');

module.exports.getMatches = function (req, resp) {
	console.log('yes');
	HLTV.getMatches().then( res => {
		console.log(res);
    resp.send(JSON.stringify(res));
	});
}