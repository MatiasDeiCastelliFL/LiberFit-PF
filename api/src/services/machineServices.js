const {Machines, Locacions} = require("../db")

  const crearMachine = async (name,image,muscle,LocacionId) => {
      const machines = await Machines.create({name,image,muscle});

      await machines.addLocacions(LocacionId);
      
    }

  const enviarMachine = async () => {
      const machines = await Machines.findAll()
      return machines
    }
  const actualizarMachine= async (name,image,muscle,id) => {
    const machines = await Machines.findByPk(id)
    machines.muscle=muscle ;machines.image=image;machines.name= name;
    machines.save();
  }
  const borrarMachine= async(id)=>{
    await Machines.destroy({ where: { id: `${id}` }})
  }
  
  module.exports = {crearMachine, enviarMachine, actualizarMachine,borrarMachine }