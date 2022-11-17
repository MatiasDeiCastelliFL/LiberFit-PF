const { Router } = require("express");
const { upload } = require('../config/multer.config')
const { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios,FiltrarAnuncioInactivo,FiltrarAnuncioActivo,inactivarAnuncio,activarAnuncio,CantInacativo,CantActivo  } = require("../controllers/AnuncioControllers");
const routerAnuncio = Router();
const {isAuthenticated}= require('../Helpers/auth')
routerAnuncio.get("/anuncios",getAnuncios);

routerAnuncio.post("/anuncios", upload, postAnuncios);
routerAnuncio.delete("/anuncios/:id", deleteAnuncios);
routerAnuncio.put("/anuncios/:id",upload, putAnuncios);
routerAnuncio.put("/anuncioDesactivar/:id",inactivarAnuncio);
routerAnuncio.put("/anuncioActivar/:id",activarAnuncio);
routerAnuncio.get("/FiltrarAnuncioActivo",FiltrarAnuncioActivo)
routerAnuncio.get("/FiltrarAnuncioInactivo",FiltrarAnuncioInactivo)
routerAnuncio.get("/CantanuncioInacativo",CantInacativo)
routerAnuncio.get("/CantAnuncioActivo",CantActivo)

module.exports = routerAnuncio;