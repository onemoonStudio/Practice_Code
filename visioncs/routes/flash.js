var express = require("express");
var router = express.Router();

router.get("/",function(req,res,next){
    //1.req.flash(key,value)    => key , value (setting)
    //2.req.flash(key)          => key          (print)
    
    //req.flash() <= connect-flash
    // req.flash("success","signup successfully");
    // req.flash("error","pw is too short");
    return res.json(req.flash());
});

router.post("/",function(req,res,next){
    //req.body
    req.flash("message",req.body.message);
    res.redirect("/flash");
    //next();
});

module.exports = router;