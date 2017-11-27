var config = require('../config');

var passport = require('passport'),
    KakaoStrategy = require('passport-kakao').Strategy;

passport.use(new KakaoStrategy({
    clientID : config.kakao_REST_Key,
    clientSecret: config.kakao_Secret,
    callbackURL : "/oauth/kakao/callback"
  },
  function(accessToken, refreshToken, profile, done){
    console.log(profile);
    return done(null,profile);
  }
));

passport.serializeUser(function(user,done){
  console.log('serializeUser');
  done(null,user);
});
passport.deserializeUser(function(obj,done){
  console.log('deserializeUser');
  done(null,obj);
});

module.exports = passport;
