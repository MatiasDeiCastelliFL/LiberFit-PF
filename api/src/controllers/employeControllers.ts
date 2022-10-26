import {Request, Response} from 'express'
import crearEmpleado from "../services/employeServices"
import { validate } from '../validation/employeeValidete'

const bcrypt= require("bcrypt")
const postEmpleado =async (req:Request, res:Response)=>{
    try {
        
        
        
        console.log(req.body);
        const datoValidacion=validate(req.body);
        console.log(datoValidacion)
     
        
        if(datoValidacion.arreglo.length>0){
            
        
        
            res.status(404).json(datoValidacion)
        }else{
            const {name,email,phone,password,account,image}=req.body
            const passwordEncript= await bcrypt.hash(password,15)

            console.log(passwordEncript);
            const datoEmpleado= await  crearEmpleado(name,email,phone,passwordEncript,account,image)
            console.log(datoEmpleado);
            res.status(200).json(datoEmpleado);    
        }
    } catch (error) {
        console.log(error)
    }
}

export default postEmpleado