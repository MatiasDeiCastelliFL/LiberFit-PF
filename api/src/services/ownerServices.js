const { Owners } = require('../db')
const crearOwner = async (name, email, passwords, phone, avatar) => {
  const owner = await Owners.create({
    name,
    email,
    passwords,
    phone,
    avatar,
  })
  console.log(owner)
}

module.exports = crearOwner
