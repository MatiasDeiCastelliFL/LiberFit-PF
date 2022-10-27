import Gym from '../db'
const crearGym = async (name, email, phone, image) => {
  const gym = await Gym.create({
    name,
    email,
    phone,
    image
  })
}
export default crearGym
