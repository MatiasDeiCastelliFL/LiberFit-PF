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
    active,
    image,
    LocacionId
    ) => {
  // const data = await cloudinary.v2.uploader.upload(path)
 const producto= await Products.create({
    name,
    price,
    stock,
    code,
    active,
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

const inactivarProducto=async(id)=>{
  await Products.update({
    active:false,
  },{
    where:{
      id:id
    }
  })
  return "La cuenta se desactivo correctamente"
}

const activarProducto=async(id)=>{

  Products.update({
    active:true,
  },{
    where:{
      id:id
    }
  })

  return "La cuenta se activo correctamente"
}

module.exports={crearProduct,buscarProduct,eliminarProduct,inactivarProducto,activarProducto} 

