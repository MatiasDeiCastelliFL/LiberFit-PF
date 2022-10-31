const { Router } = require("express");
const { upload } = require('../config/multer.config')
const { getClientsAnuncios, postClientsAnuncios, deleteClientAnuncios } = require("../controllers/AnuncioControllers");
const routerAnuncio = Router();

routerAnuncio.get("/anuncios", getClientsAnuncios);
routerAnuncio.post("/anuncios", upload, postClientsAnuncios);
routerAnuncio.delete("/anuncios/:id", deleteClientAnuncios);

module.exports = routerAnuncio;