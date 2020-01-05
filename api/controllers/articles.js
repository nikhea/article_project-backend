const db = require('../models');

exports.get_all_articles = async (req, res, next) => {
	try {
		const article = await db.Article
			.find()
			.select('title author description createdDate comments image')
			.populate('comments')
			.exec();
		if (article) {
			res.status(200).json(article);
		} else {
			res.status(500).json({ msg: 'Articles not found' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Articles not found' });
	}
};

exports.create_new_articles = async (req, res, next) => {
	try {
		const Article = new db.Article({
			title: req.body.title,
			author: req.body.author,
			description: req.body.description,
			image: req.body.image
		});
		console.log(Article);
		const article = await Article.save();

		if (article) {
			res.status(201).json(article);
		} else {
			res.status(500).json({ msg: 'unable to create new Article ' });
		}

		res.status(201).json({ message: 'article post route' });
	} catch (err) {
		// console.log(err);
		// res.status(500).json({ msg: 'unable to create new Article ', err: err });
	}
};

//
// Routes for a single article
//

exports.get_one_article = async (req, res, next) => {
	try {
		const id = req.params.ArticleId;
		const article = await db.Article
			.findById(id)
			.populate('comments')
			.select('title author description createdDate comments image')
			.exec();
		if (article) {
			res.status(200).json(article);
			console.log(article);
		} else {
			res.status(500).json({ msg: 'Article not found' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Article does not exist', err: err });
	}
};

exports.update_one_article = async (req, res, next) => {
	const id = req.params.ArticleId;
	console.log(id);
	try {
		let UpdateArticle = {};
		UpdateArticle.title = req.body.title;
		UpdateArticle.author = req.body.author;
		UpdateArticle.description = req.body.description;
		UpdateArticle.image = req.body.image;

		// console.log(req.body);
		// console.log(UpdateArticle);
		let article = db.Article
			.updateOne({ _id: id }, { $set: { ...UpdateArticle } })
			.select('title author description createdDate  image')
			.exec();
		console.log(article);
		if (article) {
			// console.log(article.id)
			res.status(200).json(article);
		}
	} catch (err) {
		// console.log(err);
		res.status(500).json({ msg: 'Article not Updated', err: err });
	}
};

exports.remove_one_article = async (req, res, next) => {
	try {
		const id = req.params.ArticleId;
		const article = await db.Article.remove({ _id: id });
		if (article) {
			res.status(200).json({ msg: 'Article deleted' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Article unable to delete', err: err });
	}
};
