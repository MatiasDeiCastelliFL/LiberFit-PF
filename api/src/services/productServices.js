const {Products} = require('../db')
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
module.exports={crearProduct} 

