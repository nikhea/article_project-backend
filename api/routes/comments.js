const express = require('express')
      router = express.Router()  
      CommentController = require('../controllers/comments')
      
      




router.get('/:ArticleId/comment', CommentController.get_one_comments)

router.post('/:ArticleId/comment', CommentController.create_new_comment)

router.delete('/:ArticleId/comment/:CommentId', CommentController.remove_one_comment)

module.exports = router

