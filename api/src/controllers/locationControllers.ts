import { Request, Response } from 'express'
import { LocationInstance } from '../Models/Locacion'
import crearLocacion from '../services/locationServices'
// import crearLocation from "../services/locationServices"


const postLocation = async (req: Request, res: Response) => {
  try {
    console.log('llegue1')

    console.log(req.body)
    console.log('llega')
    const {  name, address, phone } = req.body

    const datoLocacion = await crearLocacion(
      name,
      address,
      phone,
    )
    console.log(datoLocacion)
    res.status(200).json(datoLocacion)
  } catch (error) {
    console.log(error)
  }
}

export default postLocation
