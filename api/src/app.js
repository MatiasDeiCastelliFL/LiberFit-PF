const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routerGeneral = require('./Routes/general')
const routerClient = require('./Routes/client')
const routerEmpleado = require('./Routes/employe')
const routerExercise = require('./Routes/exercise') // richi
const routerGym = require('./Routes/gym')
const routerLocacion = require('./Routes/location')
const routerMachine = require('./Routes/machine')
const routerOwner = require('./Routes/owner')
const routerPayment = require('./Routes/payment') // richi
const routerProduct = require('./Routes/product')
const routerRol = require('./Routes/rol')
const routerRutine = require('./Routes/rutine')
const routerSuscription = require('./Routes/suscription')
const routerTraining = require('./Routes/training')

const server = express()

server.use(cors())

server.set('port', 3004 || process.env.PORT)

server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

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

module.exports = server
