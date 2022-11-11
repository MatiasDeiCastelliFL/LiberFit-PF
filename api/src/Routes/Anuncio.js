const { Router } = require("express");
const { upload } = require('../config/multer.config')
const { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios,FiltrarAnuncioInactivo,FiltrarAnuncioActivo,inactivarAnuncio,activarAnuncio,CantInacativo,CantActivo  } = require("../controllers/AnuncioControllers");
const routerAnuncio = Router();
const {isAuthenticated}= require('../Helpers/auth')
routerAnuncio.get("/anuncios",getAnuncios);
routerAnuncio.post("/anuncios",isAuthenticated, upload, postAnuncios);
routerAnuncio.delete("/anuncios/:id",isAuthenticated, deleteAnuncios);
routerAnuncio.put("/anuncios/:id",isAuthenticated,upload, putAnuncios);
routerAnuncio.put("/anuncioDesactivar",isAuthenticated, inactivarAnuncio);
routerAnuncio.put("/anuncioActivar",isAuthenticated, activarAnuncio);
routerAnuncio.get("/FiltrarAnuncioActivo",isAuthenticated, FiltrarAnuncioActivo)
routerAnuncio.get("/FiltrarAnuncioInactivo",isAuthenticated, FiltrarAnuncioInactivo)
routerAnuncio.get("/CantanuncioInacativo",isAuthenticated, CantInacativo)
routerAnuncio.get("/CantAnuncioActivo",isAuthenticated, CantActivo)
module.exports = routerAnuncio;