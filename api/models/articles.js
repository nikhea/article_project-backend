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
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
			require: true
		}
	],
	createdDate: {
		type: Date,
		default: Date.now
	}
});

const Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;
