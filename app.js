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

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin-X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Headers', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
		return res.status(200).json({});
	}
	next();
});

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
