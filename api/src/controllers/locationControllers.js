const LocationInstance = require("../Models/Locacion")
const crearLocacion= require("../services/locationServices")

const postLocation = async (req, res) => {
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
module.exports = postLocation
