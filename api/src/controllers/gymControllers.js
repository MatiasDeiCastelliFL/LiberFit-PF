const {crearGym,GetGym} = require('../services/gymServices')
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

const getAll = async (req, res) => {
  try {
      const rutinas = await GetGym();
      res.status(200).json(rutinas);
  } catch (error) {
      console.error(error);
  }
};

module.exports = {postGym,getAll}
