const express = require('express')
const passport = require('passport')
const routerLog = express.Router()

routerLog.post('/login', passport.authenticate("local"), (req,res)=>{res.json({msg:"secion iniciada",data:req.user})});


  
  routerLog.get('/logout', (req, res, next) =>{
    req.logout((err) =>{
      if (err) { 
        return next(err); 
        }
      res.redirect('/');
    });
  });


module.exports= routerLog    