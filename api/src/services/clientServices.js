const { Clients,Locacions } = require('../db')

const createClient = async (
    name,
    phone,
    email,
    password,
    image,
    active,
    locacion
) => {
    const cliente = await Clients.create({
        name,
        phone,
        email,
        password,
        image
    })
    console.log(cliente)
   const x= await Locacions.findOne({ where: { name: `${locacion}` } })
   console.log(x)
    await cliente.addLocacions(x)
}

const findClients = async () => {
    const clients = await Clients.findAll()
    return clients
}

const deleteClient = async (id) => {
    const deletedClient =  await Clients.destroy({ 
        where: { 
            id: id 
        } 
    });
    return deletedClient
  };

module.exports = { createClient, findClients, deleteClient }

