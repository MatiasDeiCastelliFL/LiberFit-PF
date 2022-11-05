const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy ;
const {Clients}= require('../db')
const {createClient}=require('../services/clientServices')

passport.use(new LocalStrategy(
  {
    passReqToCallback: true,
    usernameField: "email",
    passwordField: 'password',
 
  },
  async (req,email, password, done) => {

    const user = await Clients.findOne({where:{ email: email }});

    if (!user) {
      const{email, password,picture,name}=req.body

   const create= await createClient(name, phone="12345", email, password,active=false,picture)
 
    return done(null, create);
   

    } else{
      return done(null, user);
    }
  }
)
);

passport.use('login',new LocalStrategy(
    {
      usernameField: "email",
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