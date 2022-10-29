const {Rols}= require('../db')  
const crearRol = async (
    name,
    ) => {
  const Rol = await Rols.create({
    name,
    })
}
const enviarRol= async()=>{
const Rol = await Rols.findAll()
return Rol
}

const borrarRol= async(id)=>{
  await Rols.destroy({ where: { id: `${id}` }})
}

const actualizarRol=async (name,id)=>{
  const Rol = await Rols.findByPk(id)
  Rol.name= name;
  Rol.save()
}

module.exports={crearRol,enviarRol,borrarRol,actualizarRol} 

