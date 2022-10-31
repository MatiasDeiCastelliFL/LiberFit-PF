const { Clients,Locacions } = require('../db')

const createClient = async (
    name,phone,email,password,image,locacion
) => {
    const cliente = await Clients.create({
        name,phone,email,password,image
    })
    const lacation = await Locacions.findOne({ where: { name: locacion } })
    await cliente.addLocacions(lacation)
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

