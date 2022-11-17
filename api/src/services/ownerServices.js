const { Owners,Gyms } = require('../db')

const crearOwner = async (name, email, password, phone, avatar) => {
  var RolId=1
  const owner = await Owners.create({
    name,
    email,
    password,
    phone,
    avatar,
    RolId
  })
const gym= await Gyms.findAll()

 await gym[0].addOwners(owner)
}

module.exports = crearOwner
