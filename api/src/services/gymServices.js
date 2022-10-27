import Gym from '../db'
const crearGym = async (name, email, phone, image) => {
  const location = await Gym.create({
    name,
    email,
    phone,
    image
  })
}
export default crearGym
