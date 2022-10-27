const {Router} = require('express');
const {getApi} = require("../controllers/generalControllers.js")



const routerGeneral = Router() 
routerGeneral.get('/info', getApi )
module.exports= routerGeneral 