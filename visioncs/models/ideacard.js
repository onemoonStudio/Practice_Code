var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ideacardSchema = new Schema({
    ideaSuggester:  {type:String , required:true},
    ideaName:       {type:String , required:true},
    ideaArticle:    {type:String , required:true},
});

var ideaCard = mongoose.model("ideaCard",ideacardSchema);

module.exports=ideaCard;