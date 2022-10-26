import { LocationInstance } from '../Models/Locacion'
const crearLocacion = async (name: string, address: string, phone: string) => {
  const location = await LocationInstance.create({
    name,
    address,
    phone,
  })
}
export default crearLocacion
