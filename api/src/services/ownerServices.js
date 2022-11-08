const { Owners } = require('../db')
const crearOwner = async (name, email, password, phone, avatar,RolId=4) => {
  const owner = await Owners.create({
    name,
    email,
    password,
    phone,
    avatar,
  })
  console.log(owner)
}

module.exports = crearOwner
