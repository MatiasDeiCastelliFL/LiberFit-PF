const express = require('express')
const passport = require('passport')
const routerLog = express.Router()

routerLog.post('/login', passport.authenticate("local", {
 
    successRedirect: "/machine",
    failureRedirect: "/logout",
  }));


  
  routerLog.get('/logout', (req, res, next) =>{
    req.logout((err) =>{
      if (err) { 
        return next(err); 
        }
      res.redirect('/inicio');
    });
  });


module.exports= routerLog    