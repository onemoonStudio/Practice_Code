var express = require("express");
var router = express.Router();
var dbmodel = require("../models/model");

router.get("/",function(req,res){
   res.render("fresh");
});

router.post("/",function(req,res){
    var freshCollege = req.body.freshCollege;
    var freshName = req.body.freshName;
    var freshPhone = req.body.freshPhone;
    var freshArticle = req.body.freshArticle;
    
    var freshInf = new dbmodel( {
        freshCollege : freshCollege,
        freshName: freshName,
        freshPhone: freshPhone,
        freshArticle:freshArticle
    });
    
    freshInf.save(function(err){
      if(err) throw(err);
      return res.redirect("/");
    });
});

module.exports = router;