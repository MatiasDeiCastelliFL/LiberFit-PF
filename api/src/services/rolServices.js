const {Rols}= require('../db')

const crearRol = async (
    name,
    ) => {
  const Rol = await Rols.create({
    name,
    })
}
const enviarRol= async()=>{

  const arreglo=["Secretario/a","Profesor/a","No suscripto"];

  
  for (let index = 0; index < arreglo.length; index++) {
   await Rols.findOrCreate({where:{name:arreglo[index]}});
  }

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

