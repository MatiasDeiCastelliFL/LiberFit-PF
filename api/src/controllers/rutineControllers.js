const { crearRutine } = require('../services/rutineServices')

const postRutine = async (req, res) => {
  try {
    const { name, nameExcersise, repetition, series, video, image, muscle } =
      req.body

    const datoRutine = await crearRutine(
      name,
      nameExcersise,
      repetition,
      series,
      video,
      image,
      muscle
    )
    res.status(200).json(datoRutine)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { postRutine }
