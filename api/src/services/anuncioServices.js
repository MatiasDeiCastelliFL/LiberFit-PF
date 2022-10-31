const { Anuncios } = require('../db')
const fs = require('fs-extra')
const { cloudinary } = require('../config/cloudinary.config')


const createAnuncio = async (nombre, descripcion, path) => {

    const upload = await cloudinary.v2.uploader.upload(`${path}`)
    const x = await Anuncios.create({
        name: nombre,
        describe: descripcion,
        imgurl: upload.secure_url,
        public_id: upload.public_id
    })
    await fs.unlink(path)
    return "anuncio creado"
}

const enviarAnuncio = async () => {
    const data = await Anuncios.findAll()
    return data

}

const eliminarAnuncio = async (id) => {
    await Anuncios.destroy({
        where: {
            id: id
        }

    });
    return "Anuncio eliminado"
}
module.exports = { createAnuncio, enviarAnuncio, eliminarAnuncio }