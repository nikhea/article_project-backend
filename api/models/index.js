const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/article_2_fortune", {
  keepAlive: true
})


module.exports.Article = require("./articles");
module.exports.Comment = require("./comments");
module.exports.User = require("./User");