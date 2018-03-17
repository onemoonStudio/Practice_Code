var express = require("express");
var router = express.Router();
var dbmodel = require("../models/model");

router.get("/",function(req,res){
   res.render("apply");
});

router.post("/",function(req,res){
    var applydate = new Date().toDateString();
    var freshCollege = req.body.freshCollege;
    var freshName = req.body.freshName;
    var freshPhone = req.body.freshPhone;
    var freshKind = req.body.freshKind;
    var freshArticle = req.body.freshArticle;
    var freshRecommendation = req.body.freshRecommendation;
    
    var freshInf = new dbmodel( {
        applydate:applydate,
        freshCollege : freshCollege,
        freshName: freshName,
        freshKind: freshKind,
        freshPhone: freshPhone,
        freshArticle:freshArticle,
        freshRecommendation:freshRecommendation
    });
    
    freshInf.save(function(err){
      if(err) throw(err);
      return res.render("apply",{message:"지원해주셔서 감사합니다 ! 곧 연락드릴께요 :)"});
    });
});

module.exports = router;