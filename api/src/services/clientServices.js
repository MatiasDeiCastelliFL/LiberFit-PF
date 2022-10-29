const { Clients } = require('../db')

const createClient = async (
    name,
    rol,
    phone,
    email,
    password,
    active,
    image
) => {
    const cliente = await Clients.create({
        name,
        rol,
        phone,
        email,
        password,
        active,
        image
    })
    console.log(cliente)
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

