const LocationInstance = require("../Models/Locacion")
const {crearLocacion,enviarLocacion,borrarlocacion,actualizarLacacion,locacionById, getLocationReview}= require("../services/locationServices")

const postLocacion = async (req, res) => {
  try {
      const {  name, address, phone,GymId } = req.body

    const datoLocacion = await crearLocacion(
      name,
      address,
      phone,
      GymId
    )
    console.log(datoLocacion)
    res.status(200).json(datoLocacion)
  } catch (error) {
    console.log(error)
  }
}
const getLocacionById = async (req, res) => {
  try {
    const {id} = req.params
    const datoLocacion = await locacionById(id)
    res.status(200).json(datoLocacion)
  } catch (error) {
    console.error(error);
    res.status(404).json(error)
  }
  
}
const getLocacion=async (req, res)=>{
  try {
    const { name, email } = req.query;
    if (name) {
      return 
    }
  const datoLocacion = await enviarLocacion()
  return res.status(200).json(datoLocacion)
} catch (error) {
  return res.status(404).json(error)
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

const getLocationReviewController = async (req, res) => {
  const id = req.params.id;
  try {
    const review = await getLocationReview(id);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json(error);
  }
};


const deleteLocacion= async(req, res)=>{
  try {
    const {id}= req.query
    await  borrarlocacion(id)
    res.status(201).json({msg:'locacion eliminada'})
  } catch (error) {
    res.status(404).json({msg:'locacion no se elimino'})
  }
}
module.exports = {getLocacion,getLocacionById,postLocacion,putLocacion,deleteLocacion, getLocationReviewController }
