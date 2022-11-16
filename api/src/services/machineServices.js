const { cloudinary } = require("../config/cloudinary.config");
const {Machines} = require("../db")

  const crearMachine = async (name,path,muscle,LocacionId) => {
      const img=await cloudinary.v2.uploader.upload(path)
      const machines = await Machines.create({name,image:img.secure_url,muscle});

      await machines.addLocacions(LocacionId);
      
    }

  const enviarMachine = async () => {
      const machines = await Machines.findAll()
      return machines
    }
  const actualizarMachine= async (name,path,muscle,id) => {
   const img = await cloudinary.v2.uploader.upload(path)
    const machines = await Machines.findByPk(id)
    machines.muscle=muscle ;machines.image=img.secure_url;machines.name= name;
    machines.save();
  }
  const borrarMachine= async(id)=>{
    await Machines.destroy({ where: { id: `${id}` }})
  }
  
  module.exports = {crearMachine, enviarMachine, actualizarMachine,borrarMachine }