import {  Request, Response } from 'express';
import Employee from '../models/data'
const postData =async (req:Request, res:Response)=>{
const {name,ape}= req.body
console.log(name,ape)
res.status(201).json("listo")
} 
 



export default postData;