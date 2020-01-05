const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/article_2_fortune', {
// 	keepAlive: true,
// 	useNewUrlParser: true,
// 	// useMongoClient: true,
// 	useUnifiedTopology: true,
// 	useNewUrlParser: true
// });
mongoose.connection
	.once('open', () => {
		console.log('mongoose connected');
	})
	.on('error', () => {
		console.log('Connectin error', error);
	});
mongoose.connect(
	`mongodb+srv://imonikheaugbodaga:${process.env
		.MoNGO_ATLAS_PW}@fortune-node-project-r8uab.mongodb.net/test?retryWrites=true&w=majority`,
	{
		keepAlive: true,
		useNewUrlParser: true,
		// useMongoClient: true,
		useUnifiedTopology: true
	}
);

module.exports.Article = require('./articles');
module.exports.Comment = require('./comments');
module.exports.User = require('./User');
