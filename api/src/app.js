const express =require('express')
const cors =require("cors");
const morgan =require("morgan");
const routerGeneral = require('./Routes/general')

const server = express()

server.use(cors());

server.set ('port', 3004 || process.env.PORT)

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use('/', routerGeneral )


module.exports= server 






