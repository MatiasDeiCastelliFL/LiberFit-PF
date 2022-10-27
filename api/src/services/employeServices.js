import { Employee } from '../db'

const crearEmpleado = async (
   
    name,
    email,
    phone,
    password,
    account,
    image
) => {
  const empleado1 = await Employee.create({
    name,
    email,
    phone,
    password,
    account,
    image,
  })
  console.log(empleado1)
}

export default crearEmpleado
