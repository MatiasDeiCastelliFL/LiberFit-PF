const {Router}= require('express')

const {postTraining}= require ("../controllers/trainingControllers");

const routerTraining= Router();

routerTraining.post("/training",postTraining);

module.exports=routerTraining;