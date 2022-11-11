const {Rols}= require('../db')

const crearRol = async (name) => {
  const [rol, created] = await Rols.findOrCreate({
    where: { name:name }
  })

  return created ? true : false
};

const enviarRol= async()=>{
  const rols = await Rols.findAll();
  return rols
};

const borrarRol= async(id)=>{
  await Rols.destroy({ where: { id:id }})

module.exports={crearRol,enviarRol,borrarRol,actualizarRol}