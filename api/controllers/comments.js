const db = require('../models')

exports.get_one_comments = async (req, res, next) => {
    try {
        const id = req.params.ArticleId
        const article = await db.Article
            .findById(id)
            .populate('comments')
            .select('comments')
            .exec()
        if (article) {
            res.status(200).json(article)
            console.log(article)
        } else {
            res.status(500).json({msg:'Article not found'})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({msg:'Article does not exist',    err:err})
     
    }
}

exports.create_new_comment = async (req, res, next) => {
       
        const id = req.params.ArticleId
     
    try {
            //  find all articles by id
             const articles = await db.Article.findById(id)
        if (articles) {
            // parse the field of the comment
                let article = {}
                    article.content = req.body.content,
                        article.author = req.body.author
                //    create an instanceof the comment
                    const comment = await db.Comment.create(article)
            if (comment) {
                    //  push the new comment into the articles
                articles.comments.push(comment)
                // save the article
                     articles.save()
                    //  console.log(articles.comment)
                     res.status(201).json(comment)
                 } else {
                     
                 }
            } else {
                
            }
                
           
         } catch (err) {
            console.log(err)
            res.status(500).json({error: err})
         }
    }



    exports.remove_one_comment = async (req, res, next) => {
        try {
            const id = req.params.CommentId
            const comment = await db.Comment
                .remove({_id: id})
            if (comment) {
                res.status(200).json({msg:'Comment has been deleted'})
            }
            else {
                res.status(500).json({msg:'Comment unable to delete'})
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({msg:'Comment has been deleted', err:err})
        }
    
    }