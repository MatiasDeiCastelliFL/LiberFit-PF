import Rols from '../db'
const crearRol = async (
    name,
    ) => {
  const Rol = await Rols.create({
    name,
    })
}
export default crearRol

