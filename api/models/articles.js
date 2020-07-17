const mongoose = require('mongoose');
Comment = require('./comments');
Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
	title: {
		type: String,
		require: true
	},
	author: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: true
	},
	createdDate: {
		type: Date,
		// default: Date.now
		default: new Date
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
			require: true
		}
	]
});

const Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;
