const { crearRutine, buscarRutines,crearDesdeJsonARutinesDb } = require('../services/rutineServices')

const getRutine = async (req, res) => {
  try {
    crearDesdeJsonARutinesDb()
    const rutinas = await buscarRutines()
    res.status(200).json(rutinas)
    
  } catch (error) {
    console.error(error);
  }
}
const postRutine = async (req, res) => {
  try {
    

    const datoRutine = await crearRutine(
      req.body
    )
    res.status(200).json(datoRutine)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { postRutine,getRutine }
