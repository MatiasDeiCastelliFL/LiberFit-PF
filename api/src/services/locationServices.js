const {Locacions}= require("../db")
const crearLocacion = async (name, address, phone) => {
  // TODO cambiar nombre
  const location = await Locacions.create({
    name,
    address,
    phone,
  })
}
module.exports = crearLocacion
