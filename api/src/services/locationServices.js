import Locacion from '../db'
const crearLocacion = async (name, address, phone) => {
  const location = await Locacion.create({
    name,
    address,
    phone,
  })
}
export default crearLocacion
