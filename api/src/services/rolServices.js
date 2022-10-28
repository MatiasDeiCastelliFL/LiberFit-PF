const {Rols}= require('../db')  
const crearRol = async (
    name,
    ) => {
  const Rol = await Rols.create({
    name,
    })
}
module.exports={crearRol} 

