const passport = require('passport')
const {ExtractJwt}= require('passport-jwt')
const {Strategy}=require('passport-jwt')
const helpers={}

passport.use(new Strategy({
  secretOrKey:'top_secret',
  jwtFromRequest: ExtractJwt.fromBodyField('token')
},async (token,done)=>{
  try {
    return done(null, token.user)
  } catch (error) {
    done(error)
  }
}
))
helpers.token = passport.authenticate('jwt')

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    
    return next();
  }
  res.redirect("/login");
};


module.exports = helpers;