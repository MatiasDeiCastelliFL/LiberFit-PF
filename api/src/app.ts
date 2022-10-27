import express from 'express'
import routerGeneral from './Routes/general';
import cors from "cors";
import morgan from "morgan";
import routerEmpleado from './Routes/employe';
import routerLocacion from './Routes/location';
import routerIdcedes from './Routes/findById';
import routerIdEmployee from './Routes/buscarempleado';
import routerQuery from './Routes/findByQuery';
const server = express()

server.use(cors());

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use('/',routerGeneral )
server.use('/',routerEmpleado)
server.use('/',routerLocacion)
server.use('/',routerQuery)
server.use('/',routerIdcedes)
server.use('/',routerIdEmployee)

export default server 