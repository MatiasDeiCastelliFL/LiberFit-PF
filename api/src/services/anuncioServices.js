const { Anuncios } = require('../db')
const fs = require('fs-extra')
const { cloudinary } = require('../config/cloudinary.config')


const createAnuncio = async (nombre, descripcion, path) => {

    const upload = await cloudinary.v2.uploader.upload(`${path}`)
        await Anuncios.create({
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
    const buscar = await  Anuncios.findOne({
        where: {id:`${ id}`} 
    }) 

    cloudinary.uploader.destroy(buscar.public_id, (result)=> { console.log(result) });
    await Anuncios.destroy({
        where: {id: id } 
    });
    return "Anuncio eliminado"
}
const actualizarAnuncio = async (nombre, descripcion, path,id) => {
   
 

    const upload = await cloudinary.v2.uploader.upload(`${path}`)
    
    const update =   await Anuncios.findOne({
            where: {id:`${ id}`} 
        }) 
        update.name = nombre;
        update.describe= descripcion
        update.imgurl = upload.secure_url;
        update.public_id= upload.public_id;
        update.save()

    await fs.unlink(path)
    return "anuncio actualizado"
}

module.exports = { createAnuncio, enviarAnuncio, eliminarAnuncio, actualizarAnuncio }