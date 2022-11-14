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
  if(user){
    return done(null, user)
  }
     
   if (!user) {

      const { email, picture, name } = req.body

      const create = await createClient(name, phone = "12345", email, password, active = false, picture)

      return done(null, create);

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
      if (dueño.password === password) { return done(null, dueño) }
      else { return done(new Error(`password incorrect`)) }
    }

    if (!dueño && user) {
      if (user.password === password) { return done(null, user) }
      else { return done(new Error(`password incorrect`)) }
    }

    if (!dueño && !user) { return done(new Error(`User not exist`)) }

  }

)
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  id.toString().length > 3 ? Clients.findByPk(id).then((user) => {
    done(null, user);
  })
    .catch((err) => {
      done(new Error(`User with the id ${id} does not exist`));
    }) : Owners.findByPk(id).then((user) => {
      done(null, user);
    })
      .catch((err) => {
        done(new Error(`User with the id ${id} does not exist`));
      })
});