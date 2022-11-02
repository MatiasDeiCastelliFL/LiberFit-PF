const { Products,Locacions } = require('../db')
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
    image,
    LocacionId
    ) => {
  // const data = await cloudinary.v2.uploader.upload(path)
 const producto= await Products.create({
    name,
    price,
    stock,
    code,
    image,
    description,
    size,
    brand
    })
     console.log(LocacionId)
    await producto.addLocacions(LocacionId);
    return "prducto creado"

    // await fs.unlink(path)

}

const eliminarProduct = async (id)=>{
  await Products.destroy({
    where: {id: id } 
})
return "Producto eliminado"
}

module.exports={crearProduct,buscarProduct,eliminarProduct} 

