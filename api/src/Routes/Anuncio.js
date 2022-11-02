const { Router } = require("express");
const { upload } = require('../config/multer.config')
const { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios } = require("../controllers/AnuncioControllers");
const routerAnuncio = Router();

routerAnuncio.get("/anuncios", getAnuncios);
routerAnuncio.post("/anuncios", upload, postAnuncios);
routerAnuncio.delete("/anuncios/:id", deleteAnuncios);
routerAnuncio.put("/anuncios/:id",upload, putAnuncios);

module.exports = routerAnuncio;