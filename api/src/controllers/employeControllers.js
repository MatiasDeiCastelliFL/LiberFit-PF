const {crearEmpleado,buscarEmpleadoTotal,buscarEmpleadoPorNameAndCorreo,buscarEmpleadoPorName} = require("../services/employeServices")
const  validate  = require('../validation/validations')
 
const bcrypt= require("bcrypt")
const postEmpleado =async (req, res)=>{
    try {
        
        const datoValidacion=validate(req.body);
        console.log(datoValidacion)
        
         if(datoValidacion.length>0){
        
             res.status(404).json(datoValidacion)
        }else{
            const {name,email,phone,password,account,image}=req.body
            const passwordEncript= await bcrypt.hash(password,15)

            const datoEmpleado= await  crearEmpleado(name,email,phone,passwordEncript,account,image)
          
            res.status(200).json(datoEmpleado);
         }
    } catch (error) {
       res.status(500).json({error:error.message})
    }
}


const getEmpleado=async(req,res)=>{
    const {name,email}=req.query
    if(name && !email ){
        const DatoEmpleadoNombre= await  buscarEmpleadoPorName(name);
        if(DatoEmpleadoNombre){
            res.status(200).json({DatoEmpleadoNombre}); 
        }else{
            res.status(400).json({error:"Empleado no encontrado"});
        }
    }else{
        if(!name && email){
            const DatoEmpleadoEmail= await buscaEmail(email);
            if(DatoEmpleadoEmail){
                res.status(200).json({DatoEmpleadoEmail});
            }else{
                res.status(400).json({error:"Empleado no encontrado"});
            }
        }else{
            if(name && email){
                const DatoPorEmailyNombre= await buscarEmpleadoPorNameAndCorreo(name,email);
                if(DatoPorEmailyNombre){
                    res.status(200).json({DatoPorEmailyNombre});
                }else{
                    res.status(404).json({error:"Empleado no encontrado."})
                }
            }else{
                const datoEmpleadoTot=await buscarEmpleadoTotal();
                res.status(200).json({datoEmpleadoTot})
            }
        }
    }
}



module.exports = {postEmpleado,getEmpleado}