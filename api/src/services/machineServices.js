const {Machines} = require("../db")

const crearMachine = async (
  name,
  image,
  muscle,
  ) => {
    const machines = await Machines.create({
      name,
      image,
      muscle,
    })
  }
  
  module.exports = crearMachine