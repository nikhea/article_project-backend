const express = require('express')
      router = express.Router()
      ArticleController = require('../controllers/articles')







    

      
router.get('/', ArticleController.get_all_articles)
router.post('/', ArticleController.create_new_articles)


// GET A SINGLE ARTICLE ROUTES
router.get('/:ArticleId', ArticleController.get_one_article)
router.put('/:ArticleId', ArticleController.update_one_article)
router.delete('/:ArticleId', ArticleController.remove_one_article)





module.exports = router