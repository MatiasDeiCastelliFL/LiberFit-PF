const { Gyms } = require('../db')

const crearGym = async (name, email, phone, image) => {
  const gym = await Gyms.create({
    name,
    email,
    phone,
    image,
  })
}
module.exports = crearGym
