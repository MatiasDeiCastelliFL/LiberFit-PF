const LocationInstance = require("../Models/Locacion")
const {crearLocacion,enviarLocacion,borrarlocacion,actualizarLacacion}= require("../services/locationServices")

const postLocacion = async (req, res) => {
  try {
    console.log('llegue1')

    console.log(req.body)
    console.log('llega')
    const {  name, address, phone } = req.body

    const datoLocacion = await crearLocacion(
      name,
      address,
      phone,
    )
    console.log(datoLocacion)
    res.status(200).json(datoLocacion)
  } catch (error) {
    console.log(error)
  }
}

const getLocacion=async (req, res)=>{
try {
  const datoLocacion = await enviarLocacion()
  res.status(200).json(datoLocacion)
} catch (error) {
  res.status(404).json(error)
}
}

const putLocacion= async(req, res)=>{
  try {
     const {id}= req.params
   const { name,address,phone,} = req.body
   await  actualizarLacacion(name,address,phone,id)
   res.status(201).json({msg:'Lacacion actualizada'})
   } catch (error) {
    res.status(404).json({msg:'Lacacion no se actualizo'})
   }
}

const deleteLocacion= async(req, res)=>{
  try {
    const {id}= req.params
    await  borrarlocacion(id)
    res.status(201).json({msg:'locacion eliminada'})
  } catch (error) {
    res.status(404).json({msg:'locacion no se elimino'})
  }
}
module.exports = {getLocacion,postLocacion,putLocacion,deleteLocacion }
