const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const { Clients, Owners } = require('../db')
const { createClient } = require('../services/clientServices')

passport.use(new LocalStrategy(
  {
    passReqToCallback: true,
    usernameField: "email",
    passwordField: 'password',

  },
  async (req, email, password, done) => {

    const user = await Clients.findOne({ where: { email: email } });

    if (!user) {
      const { email, password, picture, name } = req.body

      const create = await createClient(name, phone = "12345", email, password, active = false, picture)

      return done(null, create);


    } else {
      return done(null, user);
    }
  }
)
);

passport.use('login', new LocalStrategy(
  {
    usernameField: "email",
  },
  async (email, password, done) => {

    const dueño = await Owners.findOne({ where: { email: email } });
    const user = await Clients.findOne({ where: { email: email } });

    if (dueño && !user) {
      const contraseñad = await Owners.findOne({ where: { password: password } })
      if (contraseñad) {
        return done(null, contraseñad);
      } else {
        return done(null, false);
      }
    }


    if (!dueño && user) {
      const contraseñau = await Clients.findOne({ where: { password: password } })
      if (contraseñau) {
        return done(null, contraseñau);
      } else {
        return done(null, false);
      }
    }

    
    if (!dueño && !user) {
      return done(null, false);
    }


  }

)
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, { user: user });
}); 