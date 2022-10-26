import { Request, Response } from "express";
import crearLocalcion from "../services/locationServices";
import { validate } from "../validation/employeeValidete";
const postLocacion = async (req: Request, res: Response) => {
  try {
    const datoValidacion = validate(req.body);
    console.log(datoValidacion);
    if (datoValidacion.name === "" && datoValidacion.email === "") {
      const { name, address, phone } = req.body;
      const datoLocalcion = await crearLocalcion(name, address, phone);
      res.status(200).json(datoLocalcion);
    } else {
      res.status(404).json(validate(req.body));
    }
  } catch (error) {
    console.log(error);
  }
};

export default postLocacion;
