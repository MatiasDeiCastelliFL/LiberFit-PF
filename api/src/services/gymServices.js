import Gyms from '../db'
const crearGym = async (name, email, phone, image) => {
  const gym = await Gyms.create({
    name,
    email,
    phone,
    image
  })
}
export default crearGym
