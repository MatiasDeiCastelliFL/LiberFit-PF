import Machines from '../db'
const crearMachine = async (
  name,
  image,
  muscle,
) => {
  const machines = await Machines.create({
    name,
    image,
    muscle,
  })
}
export default crearMachine
