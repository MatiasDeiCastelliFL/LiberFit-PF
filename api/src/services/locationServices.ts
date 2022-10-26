import { LocacionInstance } from "../Models/Locacion";

const crearLocalcion = async (name: string, address: string, phone: string) => {
  const locacion = await LocacionInstance.create({
    name,
    address,
    phone,
  });
  console.log(locacion);
};

export default crearLocalcion;
