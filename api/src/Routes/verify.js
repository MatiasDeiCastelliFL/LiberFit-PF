const { Router } = require("express");


const routerVerify = Router();

routerVerify.get("/verify", (req,res)=>{
const {correo,active}=req.query
res.status(201).json({
correo,active
})
});


module.exports = routerVerify;