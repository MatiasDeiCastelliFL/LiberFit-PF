const passport =require("passport")
const GoogleStrategy  =require("passport-google-oauth").OAuth2Strategy;
const { config } =require("dotenv");
const {Clients} = require("../db");
config();
const {GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID}= process.env


passport.use(
  "auth-google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3004/login/google",
    },
    async  (accessToken, refreshToken,profile, done)=>{

      const response = await Clients.findOne({where:{ email:profile.emails[0].value }});
      // IF EXITS IN DATABASE
      if (response) {
        done(null, profile);
      } else {
        // SAVE IN DATABASE
        await Clients.create({
        name:profile.displayName, 
        phone:"12345678", 
        email:profile.emails[0].value, 
        password:"1234", image:profile.photos[0].value, 
    })
        done(null,profile);
      }
    }
  )
)
  passport.serializeUser((user, done) => {
    done(null, user);
  })
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  })
