const { Router } = require("express");
const { upload } = require('../config/multer.config')
const { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios,FiltrarAnuncioInactivo,FiltrarAnuncioActivo,inactivarAnuncio,activarAnuncio,CantInacativo,CantActivo  } = require("../controllers/AnuncioControllers");
const routerAnuncio = Router();
const {isAuthenticated}= require('../Helpers/auth')
routerAnuncio.get("/anuncios",getAnuncios);
routerAnuncio.post("/anuncios",isAuthenticated, upload, postAnuncios);
routerAnuncio.delete("/anuncios/:id",isAuthenticated, deleteAnuncios);
routerAnuncio.put("/anuncios/:id",isAuthenticated,upload, putAnuncios);
routerEmpleado.put("/anuncioDesactivar",isAuthenticated,inactivarAnuncio);
routerEmpleado.put("/anuncioActivar",isAuthenticated,activarAnuncio);
routerEmpleado.get("/FiltrarAnuncioActivo",isAuthenticated,FiltrarAnuncioActivo)
routerEmpleado.get("/FiltrarAnuncioInactivo",isAuthenticated,FiltrarAnuncioInactivo)
routerEmpleado.get("/CantanuncioInacativo",isAuthenticated,CantInacativo)
routerEmpleado.get("/CantAnuncioActivo",isAuthenticated,CantActivo)
module.exports = routerAnuncio;