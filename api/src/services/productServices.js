const { Products } = require('../db')
const {cloudinary}=require('../config/cloudinary.config')
const fs = require ('fs-extra')

const buscarProduct = async() => {
  const products = await Products.findAll();
  return products;
}
// Training 
// TODO add option of recive a file and strings as a image using cloudinary
const crearProduct = async (
    name,
    price,
    stock,
    code,
    description,
    size,
    brand,
    path,
    ) => {
  const data = await cloudinary.v2.uploader.upload(path)
  await Products.create({
    name,
    price,
    stock,
    code,
    image:data.secure_url,
    description,
    size,
    brand
    })
    await fs.unlink(path)
    return "prducto creado"
}

const eliminarProduct = async (id)=>{
  await Products.destroy({
    where: {id: id } 
})
return "Producto eliminado"
}

module.exports={crearProduct,buscarProduct,eliminarProduct} 

