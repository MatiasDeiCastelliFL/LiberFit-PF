const { createAnuncio, enviarAnuncio, eliminarAnuncio, actualizarAnuncio } = require('../services/anuncioServices');


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

module.exports = { getAnuncios, postAnuncios, deleteAnuncios, putAnuncios }