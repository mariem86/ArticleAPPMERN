const express = require("express");
const router = express.Router();

const auth = require("../../middlewares/auth");
const {
  validator,
  articleRules
} = require("../../middlewares/checkValidator");
const User = require("../../models/User");

const Article = require("../../models/Article");

//@route article api/article
//@desc  Create Article
//@acess Private
router.post("/addArticle", auth,articleRules() , validator, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const newArticle = {
      title: req.body.title,
      category: req.body.category,
      content:req.body.content,
      date:req.body.date,
      user: req.user.id
    };

    const article = await new Article(newArticle).save();
    res.json(article);
  } catch (error) {
    
    res.status(500).send("Server Error !");
  }
});

//@route GET api/article
//@desc  get all article
//@acess Private
router.get(`/`, auth, async (req, res) => {
  try {
    const articles= await Article.find();
    res.send(articles);
  } catch (error) {
    
    res.status(500).send("Server Error !");
  }
});

//@route GET api/article/:id
//@desc  get article by id
//@acess Private
router.get(`/:id`, auth, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ msg: "article not found " });
    }
    res.send(article);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "article not found " });
    }
    
    res.status(500).send("Server Error !");
  }
});

//@route DELETE api/article/:id
//@desc  delete article by id
//@acess Private
router.delete(`/deleteArticle/:_id`, auth, async (req, res) => {
  try {
    const _id=req.params._id
    const article = await Article.findOneAndDelete({user:req.user.id,_id})

      

    res.send(article);
  } catch (error) {
   
    
    res.status(500).send("Server Error !");
  }
});

//@route edit api/article/:id
//@desc  edit article by id
//@acess Private
router.put("/editArticle/:_id",auth,async (req,res)=>{
try{
    const {title,category,content,date}=req.body
    const _id=req.params._id

   const article= await Article.findOneAndUpdate({user: req.user.id,_id},{$set:{title,category,content,date}},{new:true})
    
   res.send(article);
}catch(error){
    res.status(500).send("Server Error !");
}
})

module.exports = router;