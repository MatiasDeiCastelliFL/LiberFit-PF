import Rutines from '../db'
const crearRutine = async (
    name,
    ) => {
  const rutine = await Rutines.create({
    name,
    })
}
export default crearRutine
