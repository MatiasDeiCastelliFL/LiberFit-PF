const crearEmpleado = require("../services/employeServices")
/* const  validate  = require('../validation/employeeValidete')
 */
const bcrypt= require("bcrypt")
const postEmpleado =async (req, res)=>{
    try {
        console.log(req.body);
      //  const datoValidacion=validate(req.body);
      //  console.log(datoValidacion)
        
        /* if(datoValidacion.arreglo.length>0){
        
            res.status(404).json(datoValidacion)
        }else{
 */            const {name,email,phone,password,account,image}=req.body
            const passwordEncript= await bcrypt.hash(password,15)

            const datoEmpleado= await  crearEmpleado(name,email,phone,passwordEncript,account,image)
            console.log(datoEmpleado);
            res.status(200).json(datoEmpleado);
//        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = postEmpleado