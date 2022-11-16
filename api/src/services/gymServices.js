const { Gyms } = require('../db')

const crearGym = async (name, email, phone, image) => {
  const gym = await Gyms.create({
    name,
    email,
    phone,
    image,
  })
}
const GetGym = async () => {
  try {
      let gyms = await Gyms.findAll();
      return gyms;
  } catch (error) {
      console.error(error);
  }
};
module.exports = {crearGym,GetGym}
