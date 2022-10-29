const { Clients } = require('../db')

const createClient = async (
    name,
    phone,
    email,
    password,
    image
) => {
    const cliente = await Clients.create({
        name,
        phone,
        email,
        password,
        image
    })
    console.log(cliente)
    await cliente.addRol(rol)
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

