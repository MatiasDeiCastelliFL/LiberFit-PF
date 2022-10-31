const { Products } = require('../db')

const buscarProduct = async() => {
  const products = await Products.findAll();
  return products;
}

const crearProduct = async (
    name,
    price,
    stock,
    code,
    image,
    description,
    size,
    brand
    ) => {
  const product = await Products.create({
    name,
    price,
    stock,
    code,
    image,
    description,
    size,
    brand
    })
}

module.exports={crearProduct,buscarProduct} 

