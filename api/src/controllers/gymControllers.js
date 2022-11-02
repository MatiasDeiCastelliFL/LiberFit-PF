const crearGym = require('../services/gymServices')
// const { validate } = require('../validation/validations')
const postGym = async (req, res) => {
  try {
    const { name, email, phone, image } = req.body
    // const validacions = validate(req.body)
    const datoGym = await crearGym(name, email, phone, image)
    res.status(200).json(datoGym)
  } catch (error) {
    console.log(error)
  }
}

module.exports = postGym
