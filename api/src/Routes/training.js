const {Router}= require('express')

const {postTraining}= require ("../controllers/trainingControllers");

const routerTraining= Router();

routerSuscription.post("/training",postTraining);

module.exports={routerTraining};