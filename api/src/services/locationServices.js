import Locacions from '../db'
const crearLocacion = async (name, address, phone) => {
  const location = await Locacions.create({
    name,
    address,
    phone,
  })
}
export default crearLocacion
