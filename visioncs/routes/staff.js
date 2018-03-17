var express = require("express");
var router = express.Router();
var dbmodel = require("../models/model");

var logcheck = require("../middleware/m_auth");

router.get("/",function(req,res){
   res.render("staff",{message:req.flash("message")}); 
});

router.get("/loginok/",logcheck.loginRequired,function(req,res){
    dbmodel.find({},function(err,freshInfs){
        if(err) return console.log(err);
        // res.json(freshInfs);
        res.render("log_staff",{data:freshInfs});
    });
});

module.exports = router;