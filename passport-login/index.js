var express = require('express');
var session = require('express-session');
var app = express();

var passport = require('./middlewares/passport');

app.use(session({ secret: 'safsdfsd', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res) => {
  res.write('<h1>hello world! </h1> </br> <a href="/oauth/kakao"><img src="https://developers.kakao.com/assets/img/about/logos/login/kr/kakao_account_login_btn_medium_narrow_ov.png"></a>');
  res.end();
})
.get('/profile',(req,res) => {
  res.json(req.user);
})
.get('/logout',(req,res) => {
  req.logout();
  res.send('ok');
})
.get('/oauth/kakao',passport.authenticate('kakao'))
.get('/oauth/kakao/callback',passport.authenticate('kakao',{
  successRedirect: '/profile',
  failureRedirect: '/'
}));


app.listen('21333',()=>{
  console.log('server is running at 21333');
});
