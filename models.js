var mongoose = require('mongoose');
var myloc = mongoose.Schema({
	name: String,
	loc: {
		type: [Number],
		index: '2d'
	}
});
module.exports = mongoose.model('mylocation', myloc);