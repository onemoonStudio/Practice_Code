var express = require('express');
var app = express();

var MyMailer = require('./middlewares/node_mailer');
MyMailer.sendGoogle();
// MyMailer.test();

app.listen('3000',function(){
  console.log('hello wolrd');
})
