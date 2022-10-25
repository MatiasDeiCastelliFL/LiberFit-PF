import express from 'express'
import router from './Routes';

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/', router )

export default server