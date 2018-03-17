var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
//package for hash

var userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String
});

//for use User.authenticate <= statics method
//callback is function(err,user){...}
userSchema.statics.authenticate = function(username,password,callback){
    var mongoQuery = {username:username};
    User.find(mongoQuery,'username password',function(error,user) {
        if(error) console.log("hear");
        //return callback(error,null); //or return(error);
        if(!user) {
            var err = new Error("matched user is not found");
            return callback(err);
        }
        
        // console.log(user);
        // console.log(user[0]);
        
        if(typeof(user[0])=="undefined"){
            return callback("비전임원만 로그인 가능합니다.");
        }

        bcrypt.compare(password , user[0].password , function(error , result){
            //because find => use findone
            if(error) return callback(error);
            if(!result){
                var err = new Error("password is not matched");
                return callback(err);
            }
            return callback(null,user);
        });
    });
};

userSchema.pre("save",function(next){
//something is occured before save!!
    //console.log(this.name);
    //this is object
    var user = this;
    
    bcrypt.hash(user.password,10,function(error,hash){
        if(error) return next(error);
        var newPassword = hash;
        user.password = newPassword;
        return next();
    });
   // hash => 1234=>>sdvsvpoahoja
});

var User = mongoose.model("User",userSchema);


module.exports = User;

//cook signal 기능을 만든다.
