import { EmployeeInstance } from "../Models/Employee";



const crearEmpleado = async (
    
    name: string,
    email:string,
    phone: string,
    password: string,
    account: boolean,
    image: string
) => {


  const empleado1 = await EmployeeInstance.create(
    {
    name,
    email,
    phone,
    password,
    account,
    image}
  );
  console.log(empleado1);
};

export default crearEmpleado;
