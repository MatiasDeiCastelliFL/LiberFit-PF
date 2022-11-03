const { Router } = require("express");
const { upload } = require('../config/multer.config')
const { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios } = require("../controllers/AnuncioControllers");
const routerAnuncio = Router();
const {isAuthenticated}= require('../Helpers/auth')
routerAnuncio.get("/anuncios",getAnuncios);
routerAnuncio.post("/anuncios",isAuthenticated, upload, postAnuncios);
routerAnuncio.delete("/anuncios/:id",isAuthenticated, deleteAnuncios);
routerAnuncio.put("/anuncios/:id",isAuthenticated,upload, putAnuncios);

module.exports = routerAnuncio;