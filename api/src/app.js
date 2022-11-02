
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
require("dotenv").config();

const routerGeneral = require('./Routes/general')
const routerClient = require('./Routes/client')
const routerEmpleado = require('./Routes/employe')
const routerExercise = require('./Routes/exercise') 
const routerGym = require('./Routes/gym')
const routerLocacion = require('./Routes/location')
const routerMachine = require('./Routes/machine')
const routerOwner = require('./Routes/owner')
const routerPayment = require('./Routes/payment') 
const routerProduct = require('./Routes/product')
const routerRol = require('./Routes/rol')
const routerRutine = require('./Routes/rutine')
const routerSuscription = require('./Routes/suscription')
const routerTraining = require('./Routes/training')
const routerAnuncio = require('./Routes/Anuncio');



const server = express();

server.use(cors());
server.set("port", process.env.PORT || 3004);
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false}))

server.use('/', routerGeneral)
server.use('/', routerClient)
server.use('/', routerEmpleado)
server.use('/', routerExercise)
server.use('/', routerGym)
server.use('/', routerLocacion)
server.use('/', routerMachine)
server.use('/', routerOwner)
server.use('/', routerPayment)
server.use('/', routerProduct)
server.use('/', routerRol)
server.use('/', routerRutine)
server.use('/', routerSuscription)
server.use('/', routerTraining)
server.use('/', routerAnuncio)



module.exports = server;
