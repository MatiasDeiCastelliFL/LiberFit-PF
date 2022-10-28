const { Employees } = require('../db')
const {Op}= require("sequelize");
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

const buscarEmpleadoTotal= async ()=>{
  
  const Employee= await Employees.findAll();
  console.log(Employee);
  return Employee
}

const buscarEmpleadoPorNameAndCorreo= async(name,email)=>{
  const Employee= await Employees.findOne({
    where:{[Op.and]:[
      {name:name},
      {email:email}
    ]}
  });
  return Employee
}


module.exports = {crearEmpleado,buscarEmpleadoTotal,buscarEmpleadoPorNameAndCorreo}