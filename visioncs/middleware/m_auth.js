function loginRequired( req, res, next) {
  if (!(req.session.user)) {
    req.flash("message", "로그인이 필요한 페이지입니다.");
    return res.redirect("/login/");
  }
  next();
}


module.exports.loginRequired = loginRequired;