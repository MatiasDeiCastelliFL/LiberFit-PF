const express = require('express')
const passport = require('passport')
const routerLog = express.Router()
const jwt = require('jsonwebtoken')


routerLog.post('/login', passport.authenticate("login"), (req,res)=>{
  const token = jwt.sign({user:req.user},'top_secret')  
  res.json({token:token})    
});

  routerLog.post('/logup',passport.authenticate("local"),(req,res)=>{
    const token = jwt.sign({user:req.user},'top_secret')  
    res.json({token:token})   
  }); 


  routerLog.get('/logout', (req, res, next) =>{
    req.logout((err) =>{
      if (err) { 
        return next(err); 
        }
  
      res.json({msg:"sesion cerrada"})
    });
  });


module.exports= routerLog    
