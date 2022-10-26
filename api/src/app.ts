import express from 'express'
import routerGeneral from './Routes/general';
import cors from "cors";
import morgan from "morgan";
const server = express()

server.use(cors());

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use('/', routerGeneral )

export default server 