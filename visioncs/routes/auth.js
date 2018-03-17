var express =require("express");
var router = express.Router();

var User = require("../models/user");

router.get("/signup",function(req,res,next){
    return res.render("auth/signup");
});

router.post("/signup",function(req,res,next){
    //signup process
    //flash message
    var username = req.body.username;
    var password = req.body.password;
    
    var user = User({
       username:username,
       password:password
    });
    
    user.save(function(error){
        if(error) return res.JSON(error);
        // req.flash("success","signup successfully");
        return res.redirect("/");
    });
    
});

router.get("/login",function(req,res,next){
    return res.render("auth/login");
});
router.post("/login",function(req,res,next){
    //login process
    //flash message
    var username = req.body.username;
    var password = req.body.password;
    
    //for login 
    //1.validate        :: username , password
    //2.authenticate    :: authenticate(username,password,function)
    //authenticate(username,password,function(error,user))
    User.authenticate(username,password,function(error,user){
        
        if(!user){
            req.flash("message","비전임원만 로그인 가능합니다");
            return res.redirect("../staff");
        }
        if(error) {
            req.flash("message",error);
            return res.redirect("../staff");
        }
        req.session.user = user;
        // req.flash("message","Login Successfully!");
        
        return res.redirect("../staff/loginok");
    });
});

module.exports = router;
