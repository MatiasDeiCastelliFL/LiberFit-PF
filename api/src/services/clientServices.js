const { Clients } = require('../db')

const crearClient = async (
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

module.exports = crearClient

