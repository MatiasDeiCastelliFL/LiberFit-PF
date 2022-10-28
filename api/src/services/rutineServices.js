const {Rutines}= require('../db')  
const crearRutine = async (
    name,
    ) => {
  const rutine = await Rutines.create({
    name,
    })
}
module.exports={crearRutine} 
