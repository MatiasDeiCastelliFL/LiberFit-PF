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

const buscarEmpleadoTotal=async()=>{
  console.log("llegue")
  const Employee= await Employees.findAll();
  console.log(Employee);
  return Employee


}


module.exports = {crearEmpleado,buscarEmpleadoTotal}