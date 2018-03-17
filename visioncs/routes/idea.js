var express = require("express");
var router = express.Router();
var ideamodel = require("../models/ideacard");

router.route("/")
    .get(function(req,res){
        res.render("idea");
    })
    .post(function(req,res){
        var ideaSuggester = req.body.ideaSuggester;
        var ideaName =      req.body.ideaName;
        var ideaArticle =  req.body.ideaArticle;
        
        var ideaCard = new ideamodel({
            ideaSuggester:  ideaSuggester,
            ideaName :      ideaName,
            ideaArticle :  ideaArticle
        });
        
        ideaCard.save(function(err){
            if(err) throw(err);
            return res.render("vision",{message:"Thank You !"});
        })
        
});


router.route("/view")
    .get(function(req,res){
        ideamodel.find({},function(err,ideaCards){
            if(err) return console.log(err);
            res.render("ideaview",{data:ideaCards});
        });
});

module.exports = router;
