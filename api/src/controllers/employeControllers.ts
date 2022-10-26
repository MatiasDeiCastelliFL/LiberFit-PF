import {Request, Response} from 'express'
import crearEmpleado from "../services/employeServices"
import { validate } from '../validation/employeeValidete'
const postEmpleado =async (req:Request, res:Response)=>{
    try {
        console.log("llegue1")
        
        console.log(req.body);
        const datoValidacion=validate(req.body);
        console.log(datoValidacion)
        if(datoValidacion.name===""&& datoValidacion.email===""){
            console.log("llega")
            const {name,email,phone,password,account,image}=req.body
           
        
            const datoEmpleado= await  crearEmpleado(name,email,phone,password,account,image)
            console.log(datoEmpleado);
            res.status(200).json(datoEmpleado);
        }else{
            res.status(404).json(validate(req.body))
        }
     
        
    } catch (error) {
        console.log(error)
    }
}

export default postEmpleado