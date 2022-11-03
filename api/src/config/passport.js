const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy ;
const {Clients}= require('../db')


passport.use("local",new LocalStrategy(
    {
      usernameField: "email",
      passwordField:"password"
    },
    async (email, password, done) => {
      // Match Email's User
      const user = await Clients.findOne({where:{ email: email }});

      if (!user) {
        return done(null, false, { message: "Not User found." });
      } else {
        // Match Password's User
        const match = await Clients.findOne({where:{ password: password }})
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password." });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
 done(null, user.id);
});

passport.deserializeUser((user, done) => {
   done(null, {user: user});
}); 