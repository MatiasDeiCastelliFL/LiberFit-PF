const { Clients } = require('../db')

const crearClient = async (
    rol,
    phone,
    email,
    passwords,
    active,
    image
) => {
    const cliente = await Clients.create({
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

