const express = require('express')
const passport = require('passport')
const routerLog = express.Router()
const jwt = require('jsonwebtoken')

routerLog.post('/login', passport.authenticate("local"), (req,res)=>{

  const body={id:req.user.id, email:req.user.email, password: req.user.password}
  const token = jwt.sign({user:body},'top_secret')  
  res.json({token:token})    
});



  routerLog.get('/logout', (req, res, next) =>{
    req.logout((err) =>{
      if (err) { 
        return next(err); 
        }
      res.redirect('/');
    });
  });


module.exports= routerLog    
