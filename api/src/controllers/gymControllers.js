import crearGym from '../services/gymServices'

const postGym = async (req, res) => {
  try {
    const {  name, email, phone, image } = req.body

    const datoGym = await crearGym(
      name,
      email,
      phone,
      image
    )
    res.status(200).json(datoGym)
  } catch (error) {
    console.log(error)
  }
}

export default postGym
