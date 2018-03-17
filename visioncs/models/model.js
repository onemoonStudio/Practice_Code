var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var freshmanSchema = new Schema({
   applydate: {type:String},
   freshCollege:  {type:String , required:true},
   freshName:     {type:String , required:true},
   freshPhone:    {type:String , required:true},
   freshKind:     {type:String , required:true},
   freshArticle:  {type:String , required:true},
   freshRecommendation:{type:String ,required:true}
});


// var freshSchema = new Schema({
//    fresh:[freshmanSchema]   
// });

var freshInf = mongoose.model("freshInf",freshmanSchema);

module.exports=freshInf;