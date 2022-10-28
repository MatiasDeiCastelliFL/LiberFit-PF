const { Employees } = require('../db')

const crearEmpleado = async (
   
    name,
    email,
    phone,
    password,
    account,
    image
) => {
  const empleado = await Employees.create({
    name,
    email,
    phone,
    password,
    account,
    image,
  })
  console.log(empleado)
}

module.exports = crearEmpleado
