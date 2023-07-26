const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true
  },
  
  category:{
    type: String,
  },
  content: {
    type: String
  },
  date: {
    type: String
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);