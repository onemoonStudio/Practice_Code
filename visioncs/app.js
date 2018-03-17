var path = require("path");
var express = require("express");
var hbs= require('express-handlebars');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var flash =require("connect-flash");
var session = require("express-session");
// var messages = require("express-messages");

var app = express();

const aws = require("aws-sdk");

let config = new aws.Config({
  datauser: process.env.datauser,
  datapw: process.env.datapw
});


app.engine( 'hbs', hbs( { 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
                        }));
app.set( 'view engine', 'hbs' );
app.use(express.static("/app/public"));

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

//@@@@@@@@@@@@@@@@@@@@@@@@@@@flash test

app.use(flash());
app.use(cookieParser());
app.use(session({
    secret:"onemoon",
    resave:true,
    saveUninitialized: true
}));

var flashRouter = require("./routes/flash");
app.use("/flash",flashRouter);

app.use(function(req,res,next){
    res.locals.user = req.session.user;
    next();
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@test

//mode setting
// app.settings.env = "development";
app.settings.env = "produnction";

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ production setting!

//DB connect
// mongoose.connect("mongodb://"+process.env["du"]+':'+process.env['dp']+"@ds161018.mlab.com:61018/onemoon");
mongoose.connect("mongodb://"+process.env.datauser+':'+process.env.datapw+"@ds161018.mlab.com:61018/onemoon");
mongoose.Promise = global.Promise;

mongoose.connection.on('error',function(err){
  console.log(err);
});
mongoose.connection.once('open',function(){
    console.log("mongoDB is connected with mongoose");
});

var homeRouter = require("./routes/home");
var visionRouter = require("./routes/vision");
var applyRouter =require("./routes/apply");
var programRouter =require("./routes/program");
var historyRouter = require("./routes/history");
var galleryRouter = require("./routes/gallery");
var staffRouter = require("./routes/staff");
var authRouter = require("./routes/auth");
var ideaRouter = require("./routes/idea");

app.use("/",homeRouter);
app.use("/vision",visionRouter);
app.use("/apply",applyRouter);
app.use("/program",programRouter);
app.use("/history",historyRouter);
app.use("/gallery",galleryRouter);
app.use("/staff",staffRouter);
app.use("/auth",authRouter);
app.use("/idea",ideaRouter);

app.listen(process.env.PORT,function(){
    console.log("@@@@@@@@@@@@@@@@ server is running on "+process.env.PORT+" !!!");
})