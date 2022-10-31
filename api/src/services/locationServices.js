const {Locacions}= require("../db")

const actualizarLacacion=async(name, address, phone,id)=>{
  const location = await Locacions.findByPk(id);
  location.address=address;
  location.phone=phone;
  location.name= name;
  location.save();
}

const crearLocacion = async (name, address, phone) => {
  // TODO cambiar nombre
  const location = await Locacions.create({ name,address,phone, })
}
const enviarLocacion= async()=> {
  const location = await Locacions.findAll()
  return location
}
const locacionById = async (id)=>{
  try {
   console.log(`en service locacion por id`)
	 const location = await Locacions.findOne({
	    where: {
	    id
	  }})
    return location
} catch (error) {
   console.error(error);
   return error
}
}
const borrarlocacion= async(id)=> {
  const location = await Locacions.destroy({ where: { id: `${id}` }})
  return location
}

module.exports = {crearLocacion,enviarLocacion,borrarlocacion,actualizarLacacion,locacionById}
