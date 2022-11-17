const {Rols}= require('../db')

const crearRol = async (
    name,
    ) => {
  const Rol = await Rols.create({
    name,
    })
}
const enviarRol= async()=>{

  const arreglo=["Owner","Entrenador","Cliente","Recepcionista"];

  
  for (let index = 0; index < arreglo.length; index++) {
   await Rols.findOrCreate({where:{name:arreglo[index]}});
  }

  const Rol = await Rols.findAll()
return Rol
}

const borrarRol= async(id)=>{
  await Rols.destroy({ where: { id:id }})
}

const actualizarRol= async(name,id)=>{
  await Rols
  .update({ name:name }, { where: { id:id } })
}



module.exports={crearRol,enviarRol,borrarRol, actualizarRol}
