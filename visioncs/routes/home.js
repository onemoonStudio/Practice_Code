var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
	console.log(new Date());
    res.render("home");
});

module.exports = router;