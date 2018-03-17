var express = require("express");
var router = express.Router();
var dbmodel = require("../models/model");

var logcheck = require("../middleware/m_auth");

router.get("/",logcheck.loginRequired,function(req,res){
    dbmodel.find({},function(err,freshInfs){
        if(err) return console.log(err);
        // res.json(freshInfs);
        res.render("vofficer",{data:freshInfs});
    });
    
});


module.exports = router;