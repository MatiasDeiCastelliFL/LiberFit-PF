const { Locacions } = require("../db");

const actualizarLacacion = async (name, address, phone, id) => {
    const location = await Locacions.findByPk(id);
    location.address = address;
    location.phone = phone;
    location.name = name;
    location.save();
};

const crearLocacion = async (name, address, phone,GymId) => {
  // TODO cambiar nombre
  const location = await Locacions.create({ name,address,phone,GymId })
}
const enviarLocacion= async()=> {
  const location = await Locacions.findAll()
  return location
}

const locacionById = async (id) => {
  try {
      console.log(`en service locacion por id`);
      const location = await Locacions.findOne({
          where: {
              id,
          },
      });
      console.log('location.__proto__',location.__proto__)
      const machines = await location.getMachines();
      const products = await location.getProducts();
      const trainings = await location.getTrainings();
      const clients = await location.getClients();
      const employes = await location.getEmployees();
      const subscriptions = await location.getSubscriptions();
      return {
        id:location.id,
        name:location.name,
        phone:location.phone,
        address:location.address,
        GymId:location.GymId,
          machines,
          products,
          trainings,
          clients,
          employes,
          subscriptions,
      };
  } catch (error) {
      console.error(error);
      return error;
  }
};

const borrarlocacion = async (id) => {
    const location = await Locacions.destroy({ where: { id: `${id}` } });
    return location;
};

module.exports = {
    crearLocacion,
    enviarLocacion,
    borrarlocacion,
    actualizarLacacion,
    locacionById,
};
