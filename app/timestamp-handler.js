'use strict';

function TimestampHandler (moment) {
	var path = process.cwd();
	var DateTimeConverter = require(path + '/date-time-converter.js');
	var dateTimeConverter = new DateTimeConverter(moment);

	this.getTime = function (req, res) {
		var timestamp = decodeURIComponent(req.params.timestamp);
		
		var date = dateTimeConverter.fromUnixDateString(timestamp) || 
			dateTimeConverter.fromNaturalDateString(timestamp);
		
		if(!date) {
			res.json(null);
			return;
		}
		
		res.json({ 
			"unix": dateTimeConverter.toUnixDateString(date), 
			"natural": dateTimeConverter.toNaturalDateString(date)
		});
	};
}

module.exports = TimestampHandler;