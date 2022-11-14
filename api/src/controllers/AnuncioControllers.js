const { createAnuncio, enviarAnuncio, eliminarAnuncio, actualizarAnuncio,inactivarCuenta,activarCuenta } = require('../services/anuncioServices');
const { Anuncios } = require('../db')
const {busquedaDatActive,busquedaDatDesactive,contarDatoActivo,contarDatoInactivo} = require("../Helpers/busqueda")

const {
    validate,
    CuentaActiva,
    CuentaDesactivar
} = require("../validation/validations");
const getAnuncios =async (req, res) => {
    try {
        const anuncio = await enviarAnuncio();
        res.status(200).json(anuncio)
    } catch (error) {
        res.status(404).json(error.message)
    }

 }


const postAnuncios = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body
        const { path } = req.file
        const createimg = await createAnuncio(nombre, descripcion, path)
        res.status(201).json({ msg: createimg })
    } catch (error) {
        res.status(404).send(error.message)
    }

}

const deleteAnuncios = async (req, res) => {
    try {
        const {id}= req.params
    const data = await eliminarAnuncio(id)
    res.status(201).json({ msg: data })
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const putAnuncios=async(req,res)=>{
try {
    const {id}= req.params
    const { path } = req.file
    const { nombre, descripcion } = req.body
    const data = await actualizarAnuncio(nombre, descripcion,path,id)
    res.status(201).json({ msg: data })
} catch (error) {
    res.status(404).send(error.message)
}
}

const FiltrarAnuncioActivo= async(req,res)=>{

    try {
        const usuarioActive= await busquedaDatActive(Anuncios);

        res.status(200).json({usuarioActive});     
    } catch (error) {

        console.log(error.message)
        
    }
   
}

const FiltrarAnuncioInactivo= async(req,res)=>{
    try {
        
        const usuarioInactive= await busquedaDatDesactive(Anuncios);
        
        res.status(200).json({usuarioInactive});
    } catch (error) {
        
        console.log(error.message)
    }

}

const inactivarAnuncio = async (req, res) => {


    try {
        const { id } = req.params;
        
        const desactivarCuenta = await CuentaDesactivar(id, Anuncios);
        console.log(desactivarCuenta);
        if (desactivarCuenta === true) {
            await inactivarCuenta(id);

            res.status(200).json("El anuncio se desactivo correctamente");
        } else {
            res.status(400).json("El anuncio ya se encuentra desactivada");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

/* Verifica que la cuenta se encuentra desactivada, si esta la
 cuenta desactivada le va a permitr activa su cuenta sino le va a decir que su cuenta ya se encuentra activada*/
const activarAnuncio = async (req, res) => {
    try {
        const { id } = req.params;

        const accountActive = await CuentaActiva(id, Anuncios);
        if (accountActive === false) {
            await activarCuenta(id);
            res.status(200).json("Anuncio se activo correctamente");
        } else {
            res.status(400).json("Anuncio ya se encuentra activo");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const CantInacativo= async(req,res)=>{
    const cantidadActivo= await contarDatoInactivo(Anuncios)

    res.status(200).json({cantidadActivo});
}


const CantActivo= async(req,res)=>{
    const cantidadActivo= await contarDatoActivo(Anuncios)

    res.status(200).json({cantidadActivo});
}

module.exports = { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios,FiltrarAnuncioInactivo,FiltrarAnuncioActivo,inactivarAnuncio,activarAnuncio,CantInacativo,CantActivo }