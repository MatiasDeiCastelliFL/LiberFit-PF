const {Rols}= require('../db')

const crearRol = async (name) => {
  const [rol, created] = await Rols.findOrCreate({
    where: { name: `${name}` }
  })

  return created ? true : false
};

const enviarRol= async()=>{
  const rols = await Rols.findAll();
  return rols
};

const borrarRol= async(id)=>{
  await Rols.destroy({ where: { id: `${id}` }})
};

const actualizarRol=async (name,id)=>{
  const Rol = await Rols.findByPk(id)
  Rol.name= name;
  Rol.save()
};

module.exports={crearRol,enviarRol,borrarRol,actualizarRol} 

