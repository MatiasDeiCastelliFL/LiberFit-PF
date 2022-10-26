import { EmployeeInstance } from '../Models/Employee'

const crearEmpleado = async (
<<<<<<< HEAD
    
    name: string,
    email:string,
    phone: string,
    password: string,
    account: boolean,
    image: string
=======
  name: string,
  phone: string,
  email: string,
  password: string,
  account: boolean,
  image: string
>>>>>>> 0f92aa917326a84fd30c639c05b8e97f6b3e7cef
) => {
  const empleado1 = await EmployeeInstance.create({
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
