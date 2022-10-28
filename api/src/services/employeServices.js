const { Employees } = require('../db')

const crearEmpleado = async (
    name,
    email,
    phone,
    password,
    account,
    image
) => {
  await Employees.create({
    name,
    email,
    phone,
    password,
    account,
    image,
  })

}


module.exports = crearEmpleado