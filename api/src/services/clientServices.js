const { Clients } = require('../db')

const createClient = async (
    name,
    rol,
    phone,
    email,
    passwords,
    active,
    image
) => {
    const cliente = await Clients.create({
        name,
        rol,
        phone,
        email,
        passwords,
        active,
        image
    })
    console.log(cliente)
}

const findClients = async () => {
    const clients = await Clients.findAll()
    return clients
}

module.exports = { createClient, findClients }

