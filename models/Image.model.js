const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
	path: {
		type: String,
		required: [true, 'Pleace select a valid file'],
	},
});

module.exports = model('Image', imageSchema);
