
const passport = require('passport')
const {ExtractJwt}= require('passport-jwt')
const {Strategy}=require('passport-jwt')
const helpers={}

passport.use(new Strategy({
  secretOrKey:'top_secret',
  jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
},async (token,done)=>{
  try {
    return done(null, token.user)
  } catch (error) {
    done(error)
  }
}
))
helpers.isAuthenticated = passport.authenticate('jwt')

module.exports = helpers;