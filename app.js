const express = require('express');
mongoose = require('mongoose');
app = express();
Cors = require('cors');
morgan = require('morgan');
ArticleRoutes = require('./api/routes/article');
CommentRoutes = require('./api/routes/comments');
UserRoutes = require('./api/routes/users');

app.use(Cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res, next) => {
	res.end({ msg: 'working' });
});

app.use('/api/routes/article', ArticleRoutes);
app.use('/api/routes/article', CommentRoutes);
app.use('/api/routes/article/users', UserRoutes);

app.use((req, res, next) => {
	const error = new Error('NOT FOUND ');
	error.status = 404;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;
